import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export const menuHeight = 60;
const menuBackSize = 40;

function backButton() {
  const navigation = useNavigation();
  if (navigation.canGoBack())
    return (
      <TouchableOpacity
        style={styles.backButt}
        onPress={navigation.goBack}
      ></TouchableOpacity>
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
    height: menuHeight + 6
  },
  pageTitle: {
    position: 'absolute',
    left: 100,
    right: 100,
    top: 0,
    height: menuHeight,
    marginTop: menuHeight / 3,
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
    backgroundColor: '#999999',
  }
});