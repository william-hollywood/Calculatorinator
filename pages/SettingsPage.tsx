import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView} from 'react-native';
import { Header } from '../components/Header';
import { styles } from '../assets/Styles';

const colours = [
    {label: 'Red', value: '#FF0000'},
    {label: 'Green', value: '#00FF00'},
    {label: 'Blue', value: '#0000FF'},
    {label: 'White', value: '#FFFFFF'},
];

export default class SettingsScreen extends Component {
    static username = "";
    render() {
        return (
            <View>
                <Header name='Settings Screen' />
                <View style={styles.content}>
                    <Text>Username:</Text>
                    <KeyboardAvoidingView>
                        <TextInput style={styles.unitInput} onEndEditing={(str: any) =>{SettingsScreen.username = str}}>{}</TextInput> 
                    </KeyboardAvoidingView>
                </View>
            </View>
        );
    }
}