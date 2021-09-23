import React, { Component } from "react";
import { Button, TextInput, View, Text, KeyboardAvoidingView } from "react-native";
import { Header } from "../components/Header";
import { styles } from "../assets/Styles";
import RNPickerSelect from "react-native-picker-select";

export default class UnitScreen extends Component {
  // Model functions and variables

  //conversions
  dist = [
    { label: "Centimeter", value: 0.01 },
    { label: "Meter", value: 1 },
    { label: "Inch", value: 0.0254 },
    { label: "Foot", value: 0.3048 },
    { label: "Yard", value: 0.9144 },
    { label: "Kilometer", value: 1000 },
    { label: "Mile", value: 1609.34 },
  ];
  wei = [
    { label: "Kilogram", value: 1 },
    { label: "Gram", value: 0.001 },
    { label: "Pound", value: 0.453592 },
    { label: "Ounce", value: 0.0283495 },
    { label: "Stone", value: 6.35029 },
  ];
  vol = [
    { label: "Litre", value: 1 },
    { label: "Mililitre", value: 0.001 },
    { label: "Gallon", value: 4.54609 },
    { label: "Quart", value: 1.13652 },
    { label: "Pint", value: 0.568261 },
  ];
  num = 0;
  type = "d";
  sel1 = 0;
  sel2 = 0;

  /**
   * update the type of conversion
   * @param str d = dist, v = volume, w = weight
   */
  updateType = (str: string) => {
    this.type = str;
    this.forceUpdate();
  };

  /**
   * change the displayed number when the text input changes
   * @param str inputted number to convert
   */
  updateConversion = (str: any) => {
    this.num = str * (this.sel1 / this.sel2);
    this.forceUpdate();
  };

  // Presenter functions
  /**
   * Presenter rendering function
   * @returns rendered page to the View layer
   */
  render() {
    var sel = this.type == "d" ? this.dist : this.type == "w" ? this.wei : this.vol;
    return (
      <View>
        <Header name="Unit Screen" />
        <View style={styles.content}>
          <View style={styles.unitButtonView}>
            <Button color="red" onPress={() => {this.updateType("d");}}title="Distance"></Button>
            <Button color="green" onPress={() => {this.updateType("v");}} title="Volume"></Button>
            <Button color="blue" onPress={() => {this.updateType("w");}} title="Weight"></Button>
          </View>
          <Text>From:</Text>
          <RNPickerSelect key={"sel1"} placeholder={"Select an item"} onValueChange={(value) => {this.sel1 = value;}} items={sel}/>
          <Text>To:</Text>
          <RNPickerSelect key={"sel2"} placeholder={"Select an item"} onValueChange={(value) => { this.sel2 = value;}} items={sel}/>
          <Text>Value:</Text>
          <KeyboardAvoidingView>
            <TextInput style={styles.unitInput} onChangeText={this.updateConversion} keyboardType="decimal-pad"></TextInput>
          </KeyboardAvoidingView>
          <Text>Result</Text>
          <Text>{this.num}</Text>
        </View>
      </View>
    );
  }
}
