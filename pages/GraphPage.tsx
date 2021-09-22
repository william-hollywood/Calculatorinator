import React, { Component } from "react";
import { View } from "react-native";
import { Header } from "../components/Header";
import { styles } from "../assets/Styles";
import { ReactP5Wrapper } from "react-p5-wrapper";
import GrapherScreen from "./GrapherPage";

let math = require("mathjs");
let PRECISION = 3; // formatting precision

function evalContent(content: string, scope: any) {
  try {
    let result = math.format(math.evaluate(content, scope), PRECISION);
    if (result == "undefined") result = 0;
    return result;
  } catch (error) {
    return "invalid";
  }
}

var strokes = [
  [255, 0, 0],
  [0, 255, 0],
  [0, 0, 255],
];

function sketch(p5: any) {
  var size = 400;
  var screenSize = 100;
  var scale = size / screenSize;
  var tickSep = 20;
  var tickLen = 5;
  var lineTick = 1;
  p5.setup = () => p5.createCanvas(size, size, p5.WEBGL);

  p5.draw = () => {
    p5.background(250);
    p5.line(0, -size / 2, 0, size / 2);
    p5.line(-size / 2, 0, size / 2, 0);
    for (var i = -size / 2; i < size / 2; i += tickSep) {
      // add tick lables
      p5.line(scale * i, (scale * tickLen) / 2, scale * i, (scale * -tickLen) / 2);
      p5.line((scale * tickLen) / 2, scale * i, (scale * -tickLen) / 2, scale * i);
    }
    for (var n = 0; n < GrapherScreen.cells.length; n++) {
      // add line annotation
      var eqn = GrapherScreen.cells[n];
      var current = 0;
      var last = 0;
      p5.push();
      p5.stroke(strokes[n][0], strokes[n][1], strokes[n][2]);
      for (var i = -size / 2; i < size / 2; i += lineTick) {
        let scope = {
          x: i,
        };
        current = evalContent(eqn, scope);
        if (i != -size / 2) {
          p5.line(scale * (i - lineTick), scale * -last, scale * i, scale * -current);
        }
        last = current;
      }
      p5.pop();
    }
  };
}

var lines: any[] = [];

export default class GraphScreen extends Component {
  static first = true;
  render() {
    return (
      <View>
        <Header name="Graph Screen" />
        <View style={styles.content}>
          <ReactP5Wrapper sketch={sketch} />
        </View>
      </View>
    );
  }
}
