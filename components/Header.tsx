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
      <ImageBackground source={require("../assets/images/back.png")} resizeMode="cover" style={styles.backBackground}>
        <TouchableOpacity style={styles.backButt} onPress={navigation.goBack}></TouchableOpacity>
      </ImageBackground>
    );
  return;
}

function shareButton(name: any) {
  const navigation = useNavigation();
  const firepage: any = "Firebase";
  if (name == "Continuous Screen")
    return (
      <ImageBackground source={require("../assets/images/share.png")} resizeMode="cover" style={styles.shareBackground}>
        <TouchableOpacity
          style={styles.shareButt}
          onPress={() => {
            navigation.navigate(firepage);
          }}
        ></TouchableOpacity>
      </ImageBackground>
    );
  return;
}

export function Header({ name }: { name: string }) {
  return (
    <View
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
      }}
    >
      <View style={styles.menu}>
        <Text style={styles.pageTitle}> {name} </Text>
      </View>
      <View
        style={{
          width: "100%",
          position: "absolute",
        }}
      >
        {backButton()} {shareButton(name)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    borderWidth: 3,
    borderColor: "black",
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: menuHeight + 6,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "center",
  },
  pageTitle: {
    top: 0,
    margin: "0 auto",
    height: menuHeight,
    paddingTop: menuHeight / 3,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  backButt: {
    position: "absolute",
    left: 0,
    top: 0,
    width: menuBackSize,
    height: menuBackSize,
    alignSelf: "flex-start",
  },
  shareButt: {
    position: "absolute",
    right: 0,
    top: 0,
    width: menuBackSize,
    height: menuBackSize,
    alignSelf: "flex-end",
  },
  backBackground: {
    position: "absolute",
    margin: (menuHeight - menuBackSize) / 2,
    width: menuBackSize,
    height: menuBackSize,
    left: 0,
    top: 0,
  },
  shareBackground: {
    position: "absolute",
    margin: (menuHeight - menuBackSize) / 2,
    width: menuBackSize,
    height: menuBackSize,
    right: 0,
    top: 0,
    alignSelf: "flex-end",
  },
});
