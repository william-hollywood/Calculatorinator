import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { Header } from '../components/Header';
import { styles } from '../assets/Styles';

export default class UnitScreen extends Component {
    render() {
        return (
            <View>
                <Header name='Unit Screen' />
                <View style={styles.content}>
                </View>
            </View>
        );
    }
}