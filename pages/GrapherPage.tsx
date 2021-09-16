import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '../components/Header';
import { HomePageButton } from '../components/HomePageButton';
import { styles } from '../assets/Styles';

export function GrapherScreen({ navigation }: { navigation: any }) {
    return (
      <View>
        <Header name='Grapher Screen' />
        <View style={styles.content}>
          <Text>Grapher Screen</Text>
          <HomePageButton name={"Graph"} page={'Graph'}></HomePageButton>
        </View>
      </View>
    );
  }