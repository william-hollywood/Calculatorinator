import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Header } from '../components/Header';
import { styles } from '../assets/Styles';
import { ContinuousCell } from '../components/ContinuousCell';
import { Keyboard, kbstyles } from '../components/Keyboard';

var keyboard = false;
var cells = [""];
var selected = 0;

export default class ContinousScreen extends Component {
    setSelected = (num: any) => {
        if (selected == num){
            keyboard = !keyboard;
        } else {
            selected = num;
            keyboard = true;
        }
        console.log(keyboard)
        this.forceUpdate();
    }
		
    addCell = () => {
        cells.push("");
        selected = cells.length - 1;
        this.forceUpdate();
    }

    doFunc = (func: any) => {
        var sel = cells[selected]
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
        cells[selected] = sel;
        this.forceUpdate();
    }

    render() {
        var store: any[] = [];
        for (var i = 0; i < cells.length; i++) {
            var s = false;
            if (selected)
                s = true;
            store.push(ContinuousCell(cells[i],i,selected, this));
        }
        var board: any[] = [];
        if (keyboard){
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