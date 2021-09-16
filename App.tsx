import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';

import HomeScreen from './pages/HomePage';
import ContinousScreen from './pages/ContinuousPage';
import GrapherScreen from './pages/GrapherPage';
import GraphScreen from './pages/GraphPage';
import UnitScreen from './pages/UnitPage';
import SettingsScreen from './pages/SettingsPage';

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
            <Stack.Screen key="Home" name="Home" component={HomeScreen} />
            <Stack.Screen key="Continuous" name="Continuous" component={ContinousScreen} />
            <Stack.Screen key="Grapher" name="Grapher" component={GrapherScreen} />
            <Stack.Screen key="Graph" name="Graph" component={GraphScreen} />
            <Stack.Screen key="Unit" name="Unit" component={UnitScreen} />
            <Stack.Screen key="Settings" name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}