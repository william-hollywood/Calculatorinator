import React, { Component, useState } from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";
import { Header } from "../components/Header";
import { styles } from "../assets/Styles";
import { ContinuousCell } from "../components/ContinuousCell";
import { Keyboard } from "../components/Keyboard";

export default class ContinousScreen extends Component {
  // Model functions and variables

  static cells = [""];
  keyboard = false;
  selected = 0;
  
  setSelected = (num: any) => {
    if (this.selected == num) {
      this.keyboard = !this.keyboard;
    } else {
      this.selected = num;
      this.keyboard = true;
    }
    this.forceUpdate();
  };

  addNewCell = () => {
    ContinousScreen.cells.push("");
    this.selected = ContinousScreen.cells.length - 1;
  };

  doFunc = (func: any) => {
    var sel = ContinousScreen.cells[this.selected];
    switch (func) {
      case "del":
        if (sel.substring(sel.length - 5) == "(ANS)") {
          sel = sel.substring(0, sel.length - 5);
        } else {
          sel = sel.substring(0, sel.length - 1);
        }
        break;
      case "clear":
        sel = "";
        break;
      case "ANS":
        sel += "(ANS)";
        break;
      default:
        sel += func;
        break;
    }
    ContinousScreen.cells[this.selected] = sel;
    this.forceUpdate();
  };

  // Presenter functions

  addCell = () => {
    this.addNewCell();
    this.forceUpdate();
  };

  render() {
    var store: any[] = [];
    for (var i = 0; i < ContinousScreen.cells.length; i++) {
      store.push(ContinuousCell(ContinousScreen.cells[i], i, this.selected, this));
    }
    var board: any[] = [];
    if (this.keyboard) {
      board.push(<View style={styles.keyboardPadding}></View>);
      board.push(Keyboard(this, "c"));
    }
    return (
      <View>
        <View>
          <View style={styles.content}>
            <Header name="Continuous Screen" />
            {store}
            <ImageBackground source={require("../assets/images/plusSign.png")} resizeMode="cover" style={styles.imgBackground}>
              <TouchableOpacity style={styles.addCellButt} onPress={this.addCell}></TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
        {board}
      </View>
    );
  }
}
