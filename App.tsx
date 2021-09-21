import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './pages/HomePage';
import ContinousScreen from './pages/ContinuousPage';
import GrapherScreen from './pages/GrapherPage';
import GraphScreen from './pages/GraphPage';
import UnitScreen from './pages/UnitPage';
import SettingsScreen from './pages/SettingsPage';
import firebase from 'firebase/app';
import 'firebase/database';
import 'dotenv/config';
import {apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId, measurementId} from  '@env';

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  const Stack = createNativeStackNavigator();

  firebase.database().ref('Eqns/'+'one plus one').get().then(function(val){if (val.toJSON() != null)console.log(val.toJSON())});

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen key="Home" name="Calculatorinator" component={HomeScreen} />
          <Stack.Screen key="Continuous" name="Continuous" component={ContinousScreen} />
          <Stack.Screen key="Grapher" name="Grapher" component={GrapherScreen} />
          <Stack.Screen key="Graph" name="Graph" component={GraphScreen} />
          <Stack.Screen key="Unit" name="Unit Conversion" component={UnitScreen} />
          <Stack.Screen key="Settings" name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );

}