import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from '../components/Header';
import { HomePageButton } from '../components/HomePageButton';
import { styles } from '../assets/Styles';

export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Header name='Home' />
                <View style={styles.content}>
                    <HomePageButton name={"Continuous"} page={'Continuous'}></HomePageButton>
                    <HomePageButton name={"Grapher"} page={'Grapher'}></HomePageButton>
                    <HomePageButton name={"Unit Conversion"} page={'Unit'}></HomePageButton>
                    <HomePageButton name={"Settings"} page={'Settings'}></HomePageButton>
                </View>
            </View>
        );
    }
}