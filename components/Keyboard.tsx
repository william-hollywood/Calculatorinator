import { View } from "react-native";
import React from "react";
import { KeyboardButton } from "./KeyboardButton";
import { styles } from "../assets/Styles";

// Presenter functions
/**
 * return a keyboard with specific buttons depending on the page
 * 
 * @param page page to do functions on
 * @param state which state is this in c(continuous) or g(grapher)
 * @returns a keyboard with 20 buttons
 */
export function Keyboard(page: any, state: string) {
  //push all keyboard to and array of JSX elements
  var buttons: any[] = [];
  buttons.push(KeyboardButton("(", page));
  buttons.push(KeyboardButton(")", page));
  buttons.push(KeyboardButton("del", page));
  buttons.push(KeyboardButton("clear", page));
  buttons.push(KeyboardButton(".", page));
  buttons.push(KeyboardButton("0", page));
  buttons.push(KeyboardButton("1", page));
  buttons.push(KeyboardButton("2", page));
  buttons.push(KeyboardButton("3", page));
  buttons.push(KeyboardButton("4", page));
  buttons.push(KeyboardButton("5", page));
  buttons.push(KeyboardButton("6", page));
  buttons.push(KeyboardButton("7", page));
  buttons.push(KeyboardButton("8", page));
  buttons.push(KeyboardButton("9", page));
  buttons.push(KeyboardButton("/", page));
  buttons.push(KeyboardButton("*", page));
  buttons.push(KeyboardButton("+", page));
  buttons.push(KeyboardButton("-", page));
  switch (state) {
    case "c":
      buttons.push(KeyboardButton("ANS", page));
      break;
    case "g":
      buttons.push(KeyboardButton("x", page));
      break;
    case "u":
      break;
  }

  return <View style={styles.keyboard}> {buttons} </View>;
}
