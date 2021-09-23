import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Header } from "../components/Header";
import { styles } from "../assets/Styles";
import SettingsScreen from "./SettingsPage";
import LoadEqnButton from "../components/LoadEqnButton";
import { fbaseGet, fbaseSet } from "../firebase/Firebase";
import ContinuousPage from "./ContinuousPage";

export default class FirebaseScreen extends Component {

  //model functions and variables

  static saved: any[] = [];
  static lastUser = "";
  static saveName = "";

  /**
   * set the saved name of the equation to upload to firebase
   * called by the presenter
   * @param str 
   */
  setSaveName = (str: any) => {FirebaseScreen.saveName = str;}

  /**
   * 
   * @param val set the equations to display to the user
   */
  updateSaved = (val:any) => {FirebaseScreen.saved = val;};

  //presentor functions

  /**
   * check if the user has changed, if so, reset the saved equations
   */
  checkReset = ()  => {if (SettingsScreen.username != FirebaseScreen.lastUser) this.updateSaved([]);}

  /**
   * function called by view layer to save the current equation
   */
  saveEqn = () => {
    var eqnStr = "";
    for (var i = 0; i < ContinuousPage.cells.length; i++) {
      eqnStr += ContinuousPage.cells[i] + ",";
    }
    eqnStr = eqnStr.substring(0, eqnStr.length - 1);
    var keyStr = FirebaseScreen.saveName.toString();
    //make sure the key isnt blank
    if (keyStr + "." != ".") {
      //set the eqn in firebase
      fbaseSet("Eqns/" + keyStr, eqnStr);
      //add it to the users saved eqns with an increasing index
      fbaseGet("Users/" + SettingsScreen.username).then((val) => {
        var index: number = val.numChildren();
        fbaseSet("Users/" + SettingsScreen.username + "/" + index, keyStr).then(() => {
          this.updateSaved([]);
          this.forceUpdate();
        })
      });
    }
  };

  /**
   * button to save the current equation in firebase
   * @returns a button
   */
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

  /**
   * load the saved eqns of the current user from firebase
   * 
   * @returns void if not auth'ed in settings
   */
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
                  if (eqnStr != null) saved.push(<LoadEqnButton eqnStr={eqnStr} />);
                }
              }
            });
            FirebaseScreen.saved = saved;
            this.forceUpdate();
          }
        });
    }
  };

  /**
   * Presenter rendering function
   * @returns rendered page to the View layer
   */
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
