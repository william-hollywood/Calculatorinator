import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../components/Header';
import { styles } from '../assets/Styles';

export default class SettingsScreen extends Component {

    render() {
        return (
            <View>
                <Header name='Settings Screen' />
                <View style={styles.content}>
                    <Text>Settings Screen</Text>
                </View>
            </View>
        );
    }
}