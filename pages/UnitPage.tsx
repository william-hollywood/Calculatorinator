import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../components/Header';
import { styles } from '../assets/Styles';

export default class UnitScreen extends Component {
    render() {
        return (
            <View>
                <Header name='Unit Screen' />
                <View style={styles.content}>
                    <Text>Unit Screen</Text>
                </View>
            </View>
        );
    }
}