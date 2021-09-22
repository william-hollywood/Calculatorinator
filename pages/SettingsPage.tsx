import React, { Component } from "react";
import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import { Header } from "../components/Header";
import { styles } from "../assets/Styles";
import { JSHash, CONSTANTS } from "react-native-hash";
import firebase from "firebase/app";
import "firebase/database";

function testLogin(pass: any, page: any) {
  JSHash(pass, CONSTANTS.HashAlgorithms.sha256)
    .then((hash) => {
      firebase
        .database()
        .ref("Logins/" + SettingsScreen.username)
        .get()
        .then(function (val) {
          if (val.toJSON() != null) {
            if (val.toJSON() == hash) {
              SettingsScreen.hash = hash;
              SettingsScreen.auth = true;
              page.status = "Valid Login";
              page.col = "#00FF00";
            } else {
              page.status = "Invalid Login";
              page.col = "#FF0000";
              SettingsScreen.hash = "";
              SettingsScreen.auth = false;
            }
            page.forceUpdate();
          }
        });
    })
    .catch((e) => console.log(e));
}

export default class SettingsScreen extends Component {
  static username = "test1"; //"";
  static hash = "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"; //"";
  static auth = true; //false;
  status = "Enter Password";
  col = "#FFA500";
  render() {
    return (
      <View>
        <Header name="Settings Screen" />
        <View style={styles.content}>
          <KeyboardAvoidingView>
            <Text> Username: </Text>
            <TextInput
              defaultValue={SettingsScreen.username}
              style={styles.unitInput}
              onChangeText={(str: any) => {
                SettingsScreen.username = str;
              }}
            >
              {}
            </TextInput>
            <Text> Password: </Text>
            <TextInput
              secureTextEntry={true}
              defaultValue={SettingsScreen.hash}
              style={[
                styles.unitInput,
                {
                  borderColor: this.col,
                },
              ]}
              onChangeText={(str: any) => {
                this.col = "#FFA500";
                this.status = "Enter Password";
                this.forceUpdate();
              }}
              onSubmitEditing={(event: any) => {
                testLogin(event.nativeEvent.text, this);
              }}
            ></TextInput>
            <Text
              style={{
                color: this.col,
              }}
            >
              {this.status}
            </Text>
          </KeyboardAvoidingView>
        </View>
      </View>
    );
  }
}
