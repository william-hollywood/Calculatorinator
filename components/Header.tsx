import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, ImageBackground } from "react-native";
import SettingsScreen from "../pages/SettingsPage";

export const menuHeight = 60;
const menuBackSize = 40;

function backButton() {
  const navigation = useNavigation();
  if (navigation.canGoBack())
    return (
      <ImageBackground source={require('../assets/images/back.png')} resizeMode="cover" style={styles.imgBackground}>
        <TouchableOpacity style={styles.backButt} onPress={navigation.goBack}></TouchableOpacity>
      </ImageBackground>
    );
  return;
}

export function Header({ name }: { name: string }) {
  return (
    <View style={styles.menu}>
      {backButton()}
      <Text style={styles.pageTitle}>{name}</Text>
    </View>);
}

const styles = StyleSheet.create({
  menu: {
    borderWidth: 3,
    borderColor: 'black',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: menuHeight + 6,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  pageTitle: {
    position: 'absolute',
    left: 100,
    right: 100,
    top: 0,
    height: menuHeight,
    paddingTop: menuHeight / 3,
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }, backButt: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: menuBackSize,
    height: menuBackSize,
    margin: (menuHeight - menuBackSize) / 2,
  },
  imgBackground: {
    margin: (menuHeight - menuBackSize) / 2 + 5,
    width: menuBackSize - 5,
    height: menuBackSize - 5,
    flex: 1 
},
});