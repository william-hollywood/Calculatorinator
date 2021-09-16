import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '../components/Header';
import { styles } from '../assets/Styles';

export function UnitScreen({ navigation }: { navigation: any }) {
    return (
      <View>
        <Header name='Unit Screen' />
        <View style={styles.content}>
          <Text>Unit Screen</Text>
        </View>
      </View>
    );
  }