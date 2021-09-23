import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Header } from "../components/Header";
import { styles } from "../assets/Styles";
import SettingsScreen from "./SettingsPage";
import LoadEqnButton from "../components/LoadEqnButton";
import { fbaseGet, fbaseSet } from "../components/Firebase";
import ContinuousPage from "./ContinuousPage";

export default class FirebaseScreen extends Component {

  //model functions and variables

  static saved: any[] = [];
  static lastUser = "";
  static saveName = "";

  setSaveName = (str: any) => {FirebaseScreen.saveName = str;}

  updateSaved = (val:any) => {FirebaseScreen.saved = val;};

  //presentor functions

  checkReset = ()  => {if (SettingsScreen.username != FirebaseScreen.lastUser) this.updateSaved([]);}

  saveEqn = () => {
    var eqnStr = "";
    for (var i = 0; i < ContinuousPage.cells.length; i++) {
      eqnStr += ContinuousPage.cells[i] + ",";
    }
    eqnStr = eqnStr.substring(0, eqnStr.length - 1);
    var keyStr = FirebaseScreen.saveName.toString();
    if (keyStr + "." != ".") {
      fbaseSet("Eqns/" + keyStr, eqnStr);
      fbaseGet("Users/" + SettingsScreen.username).then((val) => {
        var index: number = val.numChildren();
        fbaseSet("Users/" + SettingsScreen.username + "/" + index, keyStr).then(() => {
          this.updateSaved([]);
          this.forceUpdate();
        })
      });
    }
  };

  saveCurrentButton = () => {
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
      fbaseGet("Users/" + SettingsScreen.username + "/").then((val) => {
          if (val.toJSON() != null) {
            val.forEach((childsnap) => {
              var key = childsnap.key;
              if (key != null) {
                var ref = val.child(key);
                var eqnKey = ref.toJSON();
                if (eqnKey != null) {
                  var eqnStr: string = eqnKey.toString();
                  if (eqnStr != null) saved.push(<LoadEqnButton eqnKey={eqnKey} eqnStr={eqnStr} />);
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
    this.checkReset();
    return (
      <View>
        <Header name="Firebase Screen" />
        <View style={styles.content}>
          <Text> Save As: </Text>
          <TextInput style={styles.unitInput} onChangeText={this.setSaveName}></TextInput>
          {this.saveCurrentButton()}
          <Text> Load saved: </Text>
          {this.loadSaved()}
          {FirebaseScreen.saved}
        </View>
      </View>
    );
  }
}
