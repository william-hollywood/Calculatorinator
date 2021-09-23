import React, { Component } from "react";
import { View, Text, TextInput, Button, KeyboardAvoidingView } from "react-native";
import { Header } from "../components/Header";
import { styles } from "../assets/Styles";
import { JSHash, CONSTANTS } from "react-native-hash";
import { fbaseGet, fbaseSet } from "../firebase/Firebase";



export default class SettingsScreen extends Component {
  // model functions and variables

  static username = "";
  static hash = "";
  static auth = false;
  status = "Enter Password";
  col = "#FFA500";

  /**
   * register new login using entered username and hash
   * @param page page to update results on
   */
  registerLogin = (page: any) => {
    fbaseGet("Logins/" + SettingsScreen.username).then((val) => {
        //ensure the login doesnt exist already
        if (val.toJSON() == null) {
          SettingsScreen.auth = true;
          page.status = "User Registered";
          page.col = "#00FF00";
          fbaseSet("Logins/" + SettingsScreen.username,SettingsScreen.hash);
        } else { //otherwise its invalid
          page.status = "Invalid Registration";
          page.col = "#FF0000";
          SettingsScreen.auth = false;
        }
        page.forceUpdate();
      });
  }
  
  /**
   * test the login matches what is on firebase
   * @param pass password to hash
   * @param page page to update results on
   */
  testLogin = (pass: any, page: any) => {
    //hash the password
    JSHash(pass, CONSTANTS.HashAlgorithms.sha256)
      .then((hash) => {
        // save it
        SettingsScreen.hash = hash;
        // get the login from firebase
        fbaseGet("Logins/" + SettingsScreen.username).then(function (val) {
            if (val.toJSON() != null) {
              //does it match or not
              if (val.toJSON() == hash) {
                SettingsScreen.auth = true;
                page.status = "Valid Login";
                page.col = "#00FF00";
              } else {
                page.status = "Invalid Login";
                page.col = "#FF0000";
                SettingsScreen.auth = false;
              }
              page.forceUpdate();
            }
          });
      })
      .catch((e) => {});
  }

  /**
   * method called by presenter whenever the password changes
   * @param str updated password
   */
  updateOnPassEntry(str: any) {
    // set the colour to orange as "pending submit"
    this.col = "#FFA500";
    this.status = "Enter Password";
    this.forceUpdate();
    // update the model's hash (async)
    JSHash(str, CONSTANTS.HashAlgorithms.sha256).then((hash) => {
      SettingsScreen.hash = hash;
    });
  }

  // Presenter functions
  /**
   * Presenter rendering function
   * @returns rendered page to the View layer
   */
  render() {
    return (
      <View>
        <Header name="Settings Screen" />
        <KeyboardAvoidingView style={styles.content}>
          <Text> Username: </Text>
          <TextInput
            defaultValue={SettingsScreen.username}
            style={styles.unitInput}
            onChangeText={(str: any) => {
              SettingsScreen.username = str;
            }}
          ></TextInput>
          <Text> Password: </Text>
          <TextInput
            secureTextEntry={true}
            defaultValue={""}
            style={[styles.unitInput, { borderColor: this.col }]}
            onChangeText={(str: any) => {
              this.updateOnPassEntry(str);
            }}
            onSubmitEditing={(event: any) => {
              this.testLogin(event.nativeEvent.text, this);
            }}
          ></TextInput>
          <Text style={{ color: this.col }}>{this.status}</Text>
          <Button title="Register New User" onPress={() => this.registerLogin(this)}></Button>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
