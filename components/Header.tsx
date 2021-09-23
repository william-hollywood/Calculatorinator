import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, ImageBackground } from "react-native";
import { styles } from "../assets/Styles";

// Presenter functions
/**
 * construct a back button component (if possible)
 * 
 * @returns back button component
 */
function BackButton() {
  const navigation = useNavigation();
  if (navigation.canGoBack())
    return (
      <ImageBackground source={require("../assets/images/back.png")} resizeMode="cover" style={styles.backBackground}>
        <TouchableOpacity style={styles.backButt} onPress={navigation.goBack}></TouchableOpacity>
      </ImageBackground>
    );
  return (<View></View>);
}

/**
 * construct a share button component (if on cts page)
 * 
 * @param name name of the current page
 * @returns share button component
 */
function ShareButton({ name }: { name: string }) {
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
    return (<View></View>);
}

export function Header({ name }: { name: string }) {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.menu}>
        <Text style={styles.pageTitle}> {name} </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <BackButton/>
        <ShareButton name={name}/>
      </View>
    </View>
  );
}
