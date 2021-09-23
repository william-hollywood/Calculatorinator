import React, { Component } from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";
import { Header } from "../components/Header";
import { HomePageButton } from "../components/HomePageButton";
import { styles } from "../assets/Styles";
import { Keyboard } from "../components/Keyboard";
import { GrapherCell } from "../components/GrapherCell";
import GraphScreen from "./GraphPage";

export default class GrapherScreen extends Component {
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
    GrapherScreen.cells.push("");
    this.selected = GrapherScreen.cells.length - 1;
  };

  /**
   * perform a function from the keyboard
   * @param func function to do, (number, character, clear, delete)
   */
  doFunc = (func: any) => {
    var sel = GrapherScreen.cells[this.selected];
    //update the cell depending on the button pressed
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
    GrapherScreen.cells[this.selected] = sel;
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
    var store: any[] = [];
    for (var i = 0; i < GrapherScreen.cells.length; i++) {
      var s = false;
      if (this.selected) s = true;
      store.push(GrapherCell(GrapherScreen.cells[i], i, this.selected, this));
    }
    var board: any[] = [];
    if (this.keyboard) {
      board.push(<View style={styles.keyboardPadding}></View>);
      board.push(Keyboard(this, "g"));
    }
    return (
      <View>
        <View>
          <View style={styles.content}>
            <Header name="Grapher Screen" /> {store}
            <ImageBackground source={require("../assets/images/plusSign.png")} resizeMode="cover" style={styles.imgBackground}>
              <TouchableOpacity style={styles.addCellButt} onPress={this.addCell}></TouchableOpacity>
            </ImageBackground>
            <HomePageButton name={"Graph"} page={"Graph"}></HomePageButton>
          </View>
        </View>
        {board}
      </View>
    );
  }
}
