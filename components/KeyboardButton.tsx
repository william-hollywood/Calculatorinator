import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import ContinousScreen from "../pages/ContinuousPage";
import { buttonHei, buttonWid, heiSep, styles, widSep } from "../assets/Styles";

// Presenter functions
/**
 * wrapper function for interacting between view and model through the presenter
 * @param func function to do
 * @param page where to perform the function
 */
function doFunc(func: any, page: any) {
  page.doFunc(func);
}

/**
 * method to simplify keyboard index positions (4 by X grid)
 * @param index index of button 
 * @returns 
 */
function posFromIndex(index: any) {
  var numInRow = 4;
  var row = 0;
  while (index - numInRow >= 0) {
    row++;
    index -= numInRow;
  }
  return [index, row];
}

/**
 * return a keyboard button that performs a specific operation on a page
 * @param func function to do
 * @param page page to operate on
 * @returns button component
 */
export function KeyboardButton(func: any, page: any) {
  var pos = [0, 0];
  switch (func) {
    case "(":
      pos = posFromIndex(0);
      break;
    case ")":
      pos = posFromIndex(1);
      break;
    case "del":
      pos = posFromIndex(2);
      break;
    case "clear":
      pos = posFromIndex(3);
      break;
    case ".":
      pos = posFromIndex(17);
      break;
    case "0":
      pos = posFromIndex(16);
      break;
    case "1":
      pos = posFromIndex(12);
      break;
    case "2":
      pos = posFromIndex(13);
      break;
    case "3":
      pos = posFromIndex(14);
      break;
    case "4":
      pos = posFromIndex(8);
      break;
    case "5":
      pos = posFromIndex(9);
      break;
    case "6":
      pos = posFromIndex(10);
      break;
    case "7":
      pos = posFromIndex(4);
      break;
    case "8":
      pos = posFromIndex(5);
      break;
    case "9":
      pos = posFromIndex(6);
      break;
    case "/":
      pos = posFromIndex(7);
      break;
    case "*":
      pos = posFromIndex(11);
      break;
    case "+":
      pos = posFromIndex(19);
      break;
    case "-":
      pos = posFromIndex(15);
      break;
    case "ANS":
      pos = posFromIndex(18);
      break;
    case "x":
      pos = posFromIndex(18);
      break;
  }

  var x = pos[0] * buttonWid + pos[0] * widSep + widSep / 2;
  var y = pos[1] * buttonHei + pos[1] * heiSep + heiSep / 2;

  return (
    <TouchableOpacity
      style={[
        styles.keyboardButton,
        {
          left: x.toString() + "%",
          top: y.toString() + "vh",
        },
      ]}
      onPress={() => doFunc(func, page)}
    >
      <View>
        <Text> {func} </Text>
      </View>
    </TouchableOpacity>
  );
}
