import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "../assets/Styles";

// Presenter functions
/**
 * render the content in the form of 2 side by side boxes
 * 
 * @param content content to display in right box
 * @param num cell number
 * @returns JSX component
 */
function renderContent(content: any, num: any) {
  return (
    <View style={styles.cellWrapper}>
      <View style={styles.graphAnsBox}>
        <Text> y = </Text>
      </View>
      <View style={styles.graphEqnBox}>
        <Text> {content} </Text>
      </View>
    </View>
  );
}

/**
 * construct a cell used for displaying grapher equations
 * @param content content to put in the box
 * @param num cell number
 * @param selected selected cell number
 * @param page page the cell is displayed on
 * @returns Complete cell JSX component
 */
export function GrapherCell(content: any, num: any, selected: any, page: any) {
  return (
    <TouchableOpacity
      key={num}
      style={selected == num ? styles.graphCellSelected : styles.graphCell}
      onPress={() => {
        page.setSelected(num);
      }}
    >
      {renderContent(content, num)}
    </TouchableOpacity>
  );
}
