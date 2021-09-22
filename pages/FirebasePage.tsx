import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Header } from "../components/Header";
import { styles } from "../assets/Styles";
import SettingsScreen from "./SettingsPage";
import firebase from "firebase/app";
import "firebase/database";
import { cells } from "./ContinuousPage";
import LoadEqnButton from "../components/LoadEqnButton";

export default class FirebaseScreen extends Component {
  static saved: any[] = [];
  static lastUser = "";
  static saveName = "";

  saveEqn = () => {
    var eqnStr = "";
    for (var i = 0; i < cells.length; i++) {
      eqnStr += cells[i] + ",";
    }
    eqnStr = eqnStr.substring(0, eqnStr.length - 1);
    var keyStr = FirebaseScreen.saveName.toString();
    if (keyStr+"." != ".") {
      firebase
        .database()
        .ref("Eqns/" + keyStr)
        .set(eqnStr);
      firebase
        .database()
        .ref("Users/" + SettingsScreen.username)
        .get()
        .then((val) => {
          var index: number = val.numChildren();
          firebase
            .database()
            .ref("Users/" + SettingsScreen.username + "/" + index)
            .set(keyStr)
            .then(() => {
              FirebaseScreen.saved = [];
              this.forceUpdate();
            });
        });
    }
  };

  saveCurrentButt = () => {
    if (!SettingsScreen.auth) {
      return <Text> Please authorize yourself in the settings </Text>;
    }
    return (
      <Button
        onPress={() => {
          this.saveEqn();
        }}
        title={"Save Eqn"}
      ></Button>
    );
  };

  loadSaved = () => {
    if (!SettingsScreen.auth) {
      return;
    }
    if (FirebaseScreen.saved.length == 0) {
      var saved: any[] = [];
      FirebaseScreen.lastUser = SettingsScreen.username;
      firebase
        .database()
        .ref("Users/" + SettingsScreen.username + "/")
        .get()
        .then((val) => {
          if (val.toJSON() != null) {
            val.forEach((childsnap) => {
              var key = childsnap.key;
              if (key != null) {
                var ref = val.child(key);
                var eqnKey = ref.toJSON();
                if (eqnKey != null) {
                  var eqnStr: string = eqnKey.toString();
                  if (eqnStr != null) 
                    saved.push(<LoadEqnButton eqnKey={eqnKey} eqnStr={eqnStr} />);
                }
              }
            });
            FirebaseScreen.saved = saved;
            this.forceUpdate();
          }
        });
    }
  };

  render() {
    if (SettingsScreen.username != FirebaseScreen.lastUser) {
      FirebaseScreen.saved = [];
    }
    return (
      <View>
        <Header name="Firebase Screen" />
        <View style={styles.content}>
          <Text> Save As: </Text>
          <TextInput
            defaultValue=""
            style={styles.unitInput}
            onChangeText={(str: any) => {
              FirebaseScreen.saveName = str;
            }}
          >
            { }
          </TextInput>
          {this.saveCurrentButt()}
          <Text> Load saved: </Text>
          {this.loadSaved()}
          {FirebaseScreen.saved}
        </View>
      </View>
    );
  }
}
