import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import { RootStackParamList } from './types';

const menuHeight = 60;
const menuBackSize = 40;
var x: any;

function backButton() {
  const navigation = useNavigation();
  console.log(x)
  if (x == 'None') return;
  else
    return (
      <TouchableOpacity
        style={{ width: menuBackSize, height: menuBackSize, margin: (menuHeight - menuBackSize) / 2, backgroundColor: '#999999', }}
        onPress={() => navigation.navigate(x)}
      ></TouchableOpacity>
    );
}


function Header({ name, backPage }: { name: string, backPage: any }) {
  console.log(backPage);
  x = backPage;
  return (
    <View style={{ height: menuHeight }}>
      {backButton()}
    </View>);
}

function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View>
      <Header name='Home' backPage='None' />
      <Button
        title="Continuous"
        onPress={() => navigation.navigate('Continuous')}
      />
      <Button
        title="Grapher"
        onPress={() => navigation.navigate('Grapher')}
      />
      <Button
        title="Unit Conversion"
        onPress={() => navigation.navigate('Unit')}
      />
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function ContinousScreen({ navigation }: { navigation: any }) {
  return (
    <View>
      <Header name='Continous Screen' backPage='Home' />
      <Text>Continous Screen</Text>
    </View>
  );
}

function GrapherScreen({ navigation }: { navigation: any }) {
  return (
    <View>
      <Header name='Grapher Screen' backPage='Home' />
      <Text>Grapher Screen</Text>
      <Button
        title="Graph"
        onPress={() => navigation.navigate('Graph')}
      />
    </View>
  );
}

function GraphScreen({ navigation }: { navigation: any }) {
  return (
    <View>
      <Header name='Graph Screen' backPage='Grapher' />
      <Text>Graph Screen</Text>
    </View>
  );
}

function UnitScreen({ navigation }: { navigation: any }) {
  return (
    <View>
      <Header name='Unit Screen' backPage='Home' />
      <Text>Unit Screen</Text>
    </View>
  );
}

function SettingsScreen({ navigation }: { navigation: any }) {
  return (
    <View>
      <Header name='Settings Screen' backPage='Home' />
      <Text>Settings Screen</Text>
    </View>
  );
}

export default function App() {
  const isLoadingComplete = useCachedResources();
  const Stack = createNativeStackNavigator();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Continuous" component={ContinousScreen} />
            <Stack.Screen name="Grapher" component={GrapherScreen} />
            <Stack.Screen name="Graph" component={GraphScreen} />
            <Stack.Screen name="Unit" component={UnitScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    justifyContent: 'center',
  },
});