import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { styles } from "../assets/Styles";
import ContinousScreen from "../pages/ContinuousPage";

function renderContent(content: any, num: any) {
    return (
        <View style={{ flexDirection: "row", width: '100%' }}>
            <View style={styles.graphAnsBox}><Text>y=</Text></View>
            <View style={styles.graphEqnBox}><Text>{content}</Text></View>
        </View>);
}

export function GrapherCell(content: any, num: any, selected: any, page: any) {
    if (selected == num)
        return (
            <TouchableOpacity key={num} style={styles.graphCellSelected} onPress={() => { page.setSelected(num) }}>
                {renderContent(content, num)}
            </TouchableOpacity>);
    else
        return (
            <TouchableOpacity key={num} style={styles.graphCell} onPress={() => { page.setSelected(num) }}>
                {renderContent(content, num)}
            </TouchableOpacity>);
}