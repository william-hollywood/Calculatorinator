import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import ContinousScreen from "../pages/ContinuousPage";

function renderContent(content: any, num: any) {
    return (
        <View style={{ flexDirection: "row", width: '100%' }}>
            <View style={styles.ansBox}><Text>y=</Text></View>
            <View style={styles.eqnBox}><Text>{content}</Text></View>
        </View>);
}

export function GrapherCell(content: any, num: any, selected: any, page: any) {
    console.log(content);
    if (selected == num)
        return (
            <TouchableOpacity style={styles.cellSelected} onPress={() => { page.setSelected(num) }}>
                {renderContent(content, num)}
            </TouchableOpacity>);
    else
        return (
            <TouchableOpacity style={styles.cell} onPress={() => { page.setSelected(num) }}>
                {renderContent(content, num)}
            </TouchableOpacity>);
}

const styles = StyleSheet.create({
    cell: {
        marginTop: 5,
        marginBottom: 5,
        height: 50,
        width: '100%',
        flexDirection: 'row'
    },
    eqnBox: {
        width: '85%',
        height: 50,
        borderWidth: 3,
        overflow: 'hidden',
        backgroundColor: "#dddddd",
    },
    ansBox: {
        width: '15%',
        height: 50,
        borderWidth: 3,
        overflow: 'hidden',
        backgroundColor: "#dddddd",
    },
    cellSelected: {
        marginTop: 5,
        marginBottom: 5,
        height: 50,
        width: '100%',
        borderLeftColor: "#FF0000",
        borderLeftWidth: 6,
    }
});