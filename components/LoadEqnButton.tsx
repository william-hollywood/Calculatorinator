import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";
import ContinuousPage from "../pages/ContinuousPage";
import { fbaseGet } from "../firebase/Firebase";

// Presenter functions
/**
 * button to load the equation stored in firebase
 * @param eqnStr the key to the equation stored in firebase
 * @returns 
 */
export default function LoadEqnButton({ eqnStr }: { eqnStr: any }) {
  const navigation = useNavigation();
  return (
    <Button
      title={eqnStr}
      onPress={() => {
        //get the equation stored
        fbaseGet("Eqns/" + eqnStr).then(function (val) {
            // split the stored equation by index
            var split = String(val.toJSON()).split(",");
            //set the equations in each cell
            for (var i = 0; i < split.length; i++) {
              ContinuousPage.cells[i] = split[i];
            }
            for (var i = 0; i < (ContinuousPage.cells.length - split.length); i++) {
              ContinuousPage.cells.pop();
              i--;
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
