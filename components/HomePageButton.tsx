import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../assets/Styles";

// Presenter functions
/**
 * Create a custom button for the home page to navigate between screens
 * 
 * @param name name to display on the button
 * @param page page to navigate to on press
 * @returns 
 */
export function HomePageButton({ name, page }: { name: string; page: any }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.pageButt} onPress={() => navigation.navigate(page)}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}
