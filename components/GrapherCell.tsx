import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { styles } from "../assets/Styles";
import ContinousScreen from "../pages/ContinuousPage";

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
