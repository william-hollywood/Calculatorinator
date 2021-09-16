import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '../components/Header';
import { styles } from '../assets/Styles';

export function SettingsScreen({ navigation }: { navigation: any }) {
    return (
      <View>
        <Header name='Settings Screen' />
        <View style={styles.content}>
          <Text>Settings Screen</Text>
        </View>
      </View>
    );
  }
  