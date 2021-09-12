import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';

function HomeScreen({navigation}: {navigation: any}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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

function ContinousScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Continous Screen</Text>
    </View>
  );
}

function GrapherScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Grapher Screen</Text>
    </View>
  );
}

function UnitScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Unit Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Continuous" component={ContinousScreen} />
            <Stack.Screen name="Grapher" component={GrapherScreen} />
            <Stack.Screen name="Unit" component={UnitScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
