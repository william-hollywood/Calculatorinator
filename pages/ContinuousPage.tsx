import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Header } from '../components/Header';
import { styles } from '../assets/Styles';
import { ContinuousCell } from '../components/ContinuousCell';
import { useNavigation } from '@react-navigation/native';
import { Keyboard, kbstyles } from '../components/Keyboard';

var cells = [""];
let selected = 0;

export default class ContinousScreen extends Component {
    static keyboard = false;

    setSelected = (num: any) => {
        if (selected == num){
            ContinousScreen.keyboard = !ContinousScreen.keyboard;
        } else {
            selected = num;
            ContinousScreen.keyboard = true;
        }
        console.log(ContinousScreen.keyboard)
        this.forceUpdate();
    }
		
    addCell = () => {
        cells.push("");
        this.forceUpdate();
    }

    render() {
        var store: any[] = [];
        for (var i = 0; i < cells.length; i++) {
            var s = false;
            if (selected)
                s = true;
            store.push(ContinuousCell(store[i],i,selected, this));
        }
        var board: any[] = [];
        if (ContinousScreen.keyboard){
            board.push(<View style={{marginTop:"50vh"}}></View>);
            board.push(<Keyboard></Keyboard>);
        }
        return (
            <View>
                <View>
                    <View style={styles.content}>
                        <Header name='Continuous Screen' />
                        {store}
                        <TouchableOpacity
                            style={styles.addCellButt}
                            onPress={this.addCell}>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                {board}
            </View>
        );
    }
}