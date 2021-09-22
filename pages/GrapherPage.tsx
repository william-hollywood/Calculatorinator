import React, { Component } from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";
import { Header } from "../components/Header";
import { HomePageButton } from "../components/HomePageButton";
import { styles } from "../assets/Styles";
import { Keyboard } from "../components/Keyboard";
import { GrapherCell } from "../components/GrapherCell";
import GraphScreen from "./GraphPage";

export default class GrapherScreen extends Component {
  static keyboard = false;
  static cells = [""];
  static selected = 0;

  setSelected = (num: any) => {
    if (GrapherScreen.selected == num) {
      GrapherScreen.keyboard = !GrapherScreen.keyboard;
    } else {
      GrapherScreen.selected = num;
      GrapherScreen.keyboard = true;
    }
    this.forceUpdate();
  };

  addCell = () => {
    GrapherScreen.cells.push("");
    GrapherScreen.selected = GrapherScreen.cells.length - 1;
    this.forceUpdate();
  };

  doFunc = (func: any) => {
    var sel = GrapherScreen.cells[GrapherScreen.selected];
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
    GrapherScreen.cells[GrapherScreen.selected] = sel;
    this.forceUpdate();
  };

  render() {
    var store: any[] = [];
    for (var i = 0; i < GrapherScreen.cells.length; i++) {
      var s = false;
      if (GrapherScreen.selected) s = true;
      store.push(GrapherCell(GrapherScreen.cells[i], i, GrapherScreen.selected, this));
    }
    var board: any[] = [];
    if (GrapherScreen.keyboard) {
      board.push(<View style={styles.keyboardPadding}></View>);
      board.push(Keyboard(this, "g"));
    }
    GraphScreen.first = true;
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
