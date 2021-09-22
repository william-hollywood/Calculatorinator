import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { styles } from "../assets/Styles";

export function HomePageButton({ name, page }: { name: string; page: any }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.pageButt} onPress={() => navigation.navigate(page)}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}
