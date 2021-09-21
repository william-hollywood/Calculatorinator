import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { styles } from "../assets/Styles";

let math = require('mathjs');
let PRECISION = 3; // formatting precision
let scope = {};
var answers = [""];

function evalContent(content: string, num: any) {
    var prevAns = "0";
    if (num != 0)
        prevAns = answers[num - 1];
    content = content.replaceAll("ANS", prevAns)
    try {
        let result = math.format(math.evaluate(content, scope), PRECISION);
        if (result == 'undefined')
            result = '0';
        answers[num] = result;
        return result;
    }
    catch (error) {
        answers[num] = "0";
        return 'invalid';
    }
}

function renderContent(content: any, num: any) {
    let answer = evalContent(content, num);
    return (
        <View style={{ flexDirection: "row", width: '100%' }}>
            <View style={styles.eqnBox}><Text>{content}</Text></View>
            <View style={styles.ansBox}><Text>{answer}</Text></View>
        </View>);
}

export function ContinuousCell(content: any, num: any, selected: any, page: any) {
    if (selected == num)
        return (
            <TouchableOpacity key={num} style={styles.cellSelected} onPress={() => { page.setSelected(num) }}>
                {renderContent(content, num)}
            </TouchableOpacity>);
    else
        return (
            <TouchableOpacity key={num} style={styles.cell} onPress={() => { page.setSelected(num) }}>
                {renderContent(content, num)}
            </TouchableOpacity>);
}