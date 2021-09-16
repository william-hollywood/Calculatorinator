import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";

// place holder to do stuff
function doFunc(func:any){
    console.log(func);
}

var widSep = 2.5; // 4 
var heiSep = 2; // 5 
var buttonWid = 22.5; //  4
var buttonHei = 8; // 5

function posFromIndex(index: any){
    var numInRow = 4;
    var row = 0;
    while (index - numInRow >= 0){
        row++;
        index -= numInRow;
    }
    return [index, row];
}

export function KeyboardButton(func:any){
    var pos = [0,0];
    switch (func){
        case "lbracket":
            pos = posFromIndex(0);
            break;
        case "rbracket":
            pos = posFromIndex(1);
            break;
        case "percent":
            pos = posFromIndex(2);
            break;
        case "clear":
            pos = posFromIndex(3);
            break;
        case "dot":
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
        case "divide":
            pos = posFromIndex(7);
            break;
        case "multiply":
            pos = posFromIndex(11);
            break;
        case "plus":
            pos = posFromIndex(19);
            break;
        case "minus":
            pos = posFromIndex(15);
            break;
        case "equals":
            pos = posFromIndex(18);
            break;
    }

    console.log(pos);
    var x = pos[0]*buttonWid + (pos[0])*widSep + widSep/2;
    var y = pos[1]*buttonHei + (pos[1])*heiSep + heiSep/2;

    return (
        <TouchableOpacity style={[styles.button, {left: x.toString()+"%", top: (y).toString()+"vh"}]} onPress={() => doFunc(func)}>
            <View>
                <Text>{func}</Text>
            </View>
        </TouchableOpacity>
    );
}

export const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        backgroundColor: "#222222",
        width: buttonWid.toString() + "%",
        height: buttonHei.toString() + "vh",
    }
});