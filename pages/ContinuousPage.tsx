import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Header } from '../components/Header';
import { styles } from '../assets/Styles';
import { ContinuousCell } from '../components/ContinuousCell';
import { useNavigation } from '@react-navigation/native';
import { Keyboard, kbstyles } from '../components/Keyboard';



export default class ContinousScreen extends Component {
    static keyboard = false;
    static cells = [""];
    static answers = [""];
    static selected = 0;

    setSelected = (num: any) => {
        if (ContinousScreen.selected == num){
            ContinousScreen.keyboard = !ContinousScreen.keyboard;
        } else {
            ContinousScreen.selected = num;
            ContinousScreen.keyboard = true;
        }
        console.log(ContinousScreen.keyboard)
        this.forceUpdate();
    }
		
    addCell = () => {
        ContinousScreen.cells.push("");
        ContinousScreen.selected = ContinousScreen.cells.length - 1;
        this.forceUpdate();
    }

    doFunc = (func: any) => {
        var sel = ContinousScreen.cells[ContinousScreen.selected]
        switch (func){
            case "del":
                console.log(sel.substring(sel.length-5));
                if (sel.substring(sel.length-5) == '(ANS)'){
                    sel = sel.substring(0, sel.length-5)
                } else {
                    sel = sel.substring(0, sel.length-1)
                }
                break;
            case "clear":
                sel = "";
                break;
            case "ANS":
                sel += "(ANS)";
                break;
            default: 
                sel += func;
                break;
        }
        ContinousScreen.cells[ContinousScreen.selected] = sel;
        this.forceUpdate();
    }

    render() {
        var store: any[] = [];
        for (var i = 0; i < ContinousScreen.cells.length; i++) {
            var s = false;
            if (ContinousScreen.selected)
                s = true;
            store.push(ContinuousCell(ContinousScreen.cells[i],i,ContinousScreen.selected, this));
        }
        var board: any[] = [];
        if (ContinousScreen.keyboard){
            board.push(<View style={{marginTop:"50vh"}}></View>);
            board.push(Keyboard(this, "c"));
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