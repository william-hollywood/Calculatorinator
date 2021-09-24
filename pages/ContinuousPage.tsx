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
  
  /**
   * set the selected cell on this page
   * @param num cell to select
   */
  setSelected = (num: any) => {
    if (this.selected == num) {
      this.keyboard = !this.keyboard;
    } else {
      this.selected = num;
      this.keyboard = true;
    }
    this.forceUpdate();
  };

  /**
   * push a new cell to the screen
   */
  addNewCell = () => {
    ContinousScreen.cells.push("");
    this.selected = ContinousScreen.cells.length - 1;
  };

  /**
   * perform a function from the keyboard
   * @param func function to do, (number, character, clear, delete)
   */
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

  /**
   * function called by the View to add a cell
   */
  addCell = () => {
    this.addNewCell();
    this.forceUpdate();
  };

  /**
   * Presenter rendering function
   * @returns rendered page to the View layer
   */
  render() {
    //render any cells
    var store: any[] = [];
    for (var i = 0; i < ContinousScreen.cells.length; i++) {
      store.push(ContinuousCell(ContinousScreen.cells[i], i, 
        this.selected, this));
    }
    //render the keyboard
    var board: any[] = [];
    if (this.keyboard) {
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
