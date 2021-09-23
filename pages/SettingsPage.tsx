import React, { Component } from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Button } from "react-native";
import { Header } from "../components/Header";
import { styles } from "../assets/Styles";
import { JSHash, CONSTANTS } from "react-native-hash";
import { fbaseGet, fbaseSet } from "../components/Firebase";



export default class SettingsScreen extends Component {
  // static username = "test"; //"";
  // static hash = "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"; //"";
  // static auth = true; //false;
  static username = "";
  static hash = "";
  static auth = false;
  status = "Enter Password";
  col = "#FFA500";

  registerLogin = (page: any) => {
    fbaseGet("Logins/" + SettingsScreen.username).then((val) => {
        if (val.toJSON() == null) {
          SettingsScreen.auth = true;
          page.status = "User Registered";
          page.col = "#00FF00";
          fbaseSet("Logins/" + SettingsScreen.username,SettingsScreen.hash);
        } else {
          page.status = "Invalid Registration";
          page.col = "#FF0000";
          SettingsScreen.auth = false;
        }
        page.forceUpdate();
      });
  }
  
  testLogin = (pass: any, page: any) => {
    JSHash(pass, CONSTANTS.HashAlgorithms.sha256)
      .then((hash) => {
        SettingsScreen.hash = hash;
        fbaseGet("Logins/" + SettingsScreen.username).then(function (val) {
            if (val.toJSON() != null) {
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

  updateOnPassEntry(str: any) {
    this.col = "#FFA500";
    this.status = "Enter Password";
    this.forceUpdate();
    JSHash(str, CONSTANTS.HashAlgorithms.sha256).then((hash) => {
      SettingsScreen.hash = hash;
    });
  }

  // Presenter functions

  render() {
    return (
      <View>
        <Header name="Settings Screen" />
        <View style={styles.content}>
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
        </View>
      </View>
    );
  }
}
