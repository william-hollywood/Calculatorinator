import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../components/Header';
import { styles } from '../assets/Styles';

export default class GraphScreen extends Component {

    render() {
        return (
            <View>
                <Header name='Graph Screen' />
                <View style={styles.content}>
                    <Text>Graph Screen</Text>
                </View>
            </View>
        );
    }
}