import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '../components/Header';
import { styles } from '../assets/Styles';

export function ContinousScreen({ navigation }: { navigation: any }) {
    return (
      <View>
        <Header name='Continous Screen' />
        <View style={styles.content}>
          <Text>Continous Screen</Text>
        </View>
      </View>
    );
  }