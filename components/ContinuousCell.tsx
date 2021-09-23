import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "../assets/Styles";

let math = require("mathjs");
let PRECISION = 3; // formatting precision

// Model functions and variables
let scope = {};
var answers = [""];

/**
 * evaluate the content from one continuous cell
 * 
 * @param content content to be evaluated
 * @param num cell number
 * @returns output of content cell
 */
function evalContent(content: string, num: any) {
  var prevAns = "0";
  // set the previous answer if its not the first cell
  if (num != 0) 
    prevAns = answers[num - 1];
  // replace the answer in the eqn string
  content = content.replaceAll("ANS", prevAns);
  try {
    //evaluate the eqn
    let result = math.format(math.evaluate(content, scope), PRECISION);
    if (result == "undefined")  //if its invalid, its 0
      result = "0";
    answers[num] = result;
    return result;
  } catch (error) {
    answers[num] = "0";
    return "invalid";
  }
}

/**
 * render the content in the form of 2 side by side boxes
 * 
 * @param content content to display in left box
 * @param num cell number
 * @returns JSX component
 */
function renderContent(content: any, num: any) {
  let answer = evalContent(content, num);
  return (
    <View style={styles.cellWrapper}>
      <View style={styles.eqnBox}>
        <Text> {content} </Text>
      </View>
      <View style={styles.ansBox}>
        <Text> {answer} </Text>
      </View>
    </View>
  );
}

// Presenter functions

/**
 * construct a cell used for displaying continuous equations
 * @param content content to put in the box
 * @param num cell number
 * @param selected selected cell number
 * @param page page the cell is displayed on
 * @returns Complete cell JSX component
 */
export function ContinuousCell(content: any, num: any, selected: any, page: any) {
  return (
    <TouchableOpacity key={num} style={selected == num ? styles.cellSelected : styles.cell} onPress={() => {page.setSelected(num);}}>
      {renderContent(content, num)}
    </TouchableOpacity>
  );
}
