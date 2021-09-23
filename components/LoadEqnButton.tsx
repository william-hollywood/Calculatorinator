import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";
import ContinuousPage from "../pages/ContinuousPage";
import { fbaseGet } from "./Firebase";

export default function LoadEqnButton({ eqnKey, eqnStr }: { eqnKey: any; eqnStr: any }) {
  const navigation = useNavigation();
  return (
    <Button
      title={eqnStr}
      onPress={() => {
        eqnKey = String(eqnKey);
        fbaseGet("Eqns/" + eqnKey).then(function (val) {
            var split = String(val.toJSON()).split(",");
            for (var i = 0; i < split.length; i++) {
              ContinuousPage.cells[i] = split[i];
            }
            for (var i = split.length; i < ContinuousPage.cells.length; i++) {
              ContinuousPage.cells[i] = "";
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
