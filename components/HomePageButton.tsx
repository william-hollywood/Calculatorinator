import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function HomePageButton({ name, page }: { name: string, page: any }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.pageButt} onPress={() => navigation.navigate(page)}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pageButt: {
    marginTop: 10,
    height: '10vh',
    width: '60%',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderWidth: 3,
  }
});