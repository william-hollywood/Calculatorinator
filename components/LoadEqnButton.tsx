import { useNavigation } from "@react-navigation/native";
import firebase from "firebase/app";
import "firebase/database";
import React from "react";
import { Button } from "react-native";
import { cells } from "../pages/ContinuousPage";

export default function LoadEqnButton({ eqnKey, eqnStr }: { eqnKey: any; eqnStr: any }) {
  const navigation = useNavigation();
  return (
    <Button
      title={eqnStr}
      onPress={() => {
        eqnKey = String(eqnKey);
        firebase
          .database()
          .ref("Eqns/" + eqnKey)
          .get()
          .then(function (val) {
            console.log(val.toJSON());
            var split = String(val.toJSON()).split(",");
            for (var i = 0; i < split.length; i++) {
              cells[i] = split[i];
            }
          })
          .then(() => {
            var page: any = "Calculatorinator";
            navigation.navigate(page);
          });
      }}
    ></Button>
  );
}
