import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export function ContinuousCell(content: any, num: any, selected: any, page: any) {
    if (selected == num)
        return (
            <TouchableOpacity style={styles.cellSelected} onPress={() => { page.setSelected(num) }}>
                <View >
                    <Text>{content}</Text>
                </View>
            </TouchableOpacity>);
    else
        return (
            <TouchableOpacity style={styles.cell} onPress={() => { page.setSelected(num)}}>
                <View >
                    <Text>{content}</Text>
                </View>
            </TouchableOpacity>);
}

const styles = StyleSheet.create({
    cell: {
        marginTop: 5,
        marginBottom: 5,
        height: 50,
        width: '100%',
        borderWidth: 3,
    },
    cellSelected: {
        marginTop: 5,
        marginBottom: 5,
        height: 50,
        width: '100%',
        borderWidth: 3,
        borderLeftColor:"#FF0000",
        borderLeftWidth:6,
    }
});