import { Component } from "react";
import { View, StyleSheet } from "react-native";
import React from "react";
import { KeyboardButton } from "./KeyboardButton";

export class Keyboard extends Component{
    render(){
        var buttons: any[] = [];
        buttons.push(KeyboardButton("lbracket"));
        buttons.push(KeyboardButton("rbracket"));
        buttons.push(KeyboardButton("percent"));
        buttons.push(KeyboardButton("clear"));
        buttons.push(KeyboardButton("dot"));
        buttons.push(KeyboardButton("0"));
        buttons.push(KeyboardButton("1"));
        buttons.push(KeyboardButton("2"));
        buttons.push(KeyboardButton("3"));
        buttons.push(KeyboardButton("4"));
        buttons.push(KeyboardButton("5"));
        buttons.push(KeyboardButton("6"));
        buttons.push(KeyboardButton("7"));
        buttons.push(KeyboardButton("8"));
        buttons.push(KeyboardButton("9"));
        buttons.push(KeyboardButton("divide"));
        buttons.push(KeyboardButton("multiply"));
        buttons.push(KeyboardButton("plus"));
        buttons.push(KeyboardButton("minus"));
        buttons.push(KeyboardButton("equals"));
        
        return (
            <View style={kbstyles.board}>
                {buttons}
            </View>
        );
    }
}

export const kbstyles = StyleSheet.create({
    board: {
        position: 'fixed',
        left:0,
        top: '50vh',
        height: '50vh',
        width: '100%',
        borderWidth: 2,
        backgroundColor: '#888888'
    }
});