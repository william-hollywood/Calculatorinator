import React, { Component } from "react";
import { View } from "react-native";
import { Header } from "../components/Header";
import { styles } from "../assets/Styles";
import { ReactP5Wrapper } from "react-p5-wrapper";
import GrapherScreen from "./GrapherPage";

let math = require("mathjs");
let PRECISION = 3; // formatting precision

export default class GraphScreen extends Component {
  // model functions and variables

  strokes = [
    [255, 0, 0],
    [0, 255, 0],
    [0, 0, 255],
    [255, 0, 255],
    [0, 255, 255],
    [255, 255, 0],
  ];

  /**
   * helper method to evaluate the y value at a point
   * @param content what is the equation
   * @param scope what x value am i evaluating for
   * @returns result or invalid
   */
  evalGraphPoint = (content: string, scope: any) => {
    try {
      let result = math.format(math.evaluate(content, scope), PRECISION);
      if (result == "undefined") result = 0;
      return result;
    } catch (error) {
      return "invalid";
    }
  }
  
  /**
   * processing sketch to display the equations entered previously
   * @param p5 p5 object passed into this by the wrapper
   */
  sketch = (p5: any) => {
    // base variables
    var size = 400;
    var screenSize = 100;
    var scale = size / screenSize;
    var tickSep = 5;
    var tickLen = 2;
    var lineTick = 0.2;

    //setup the canvase, dont keep painting it, as it only needs to display once
    p5.setup = () => {
      p5.createCanvas(size, size, p5.WEBGL);
      p5.noLoop();
    }
  
    p5.draw = () => {
      // white background
      p5.background(250);
      //horiz and vert lines
      p5.line(0, -size / 2, 0, size / 2);
      p5.line(-size / 2, 0, size / 2, 0);
      //draw the ticks
      for (var i = -size / 2; i < size / 2; i += tickSep) {
        p5.line(scale * i, (scale * tickLen) / 2, scale * i, (scale * -tickLen) / 2);
        p5.line((scale * tickLen) / 2, scale * i, (scale * -tickLen) / 2, scale * i);
      }
      // iterate over the eqns to graph
      for (var n = 0; n < GrapherScreen.cells.length; n++) {
        var eqn = GrapherScreen.cells[n];
        var current = 0;
        var last = 0;
        p5.push();
        p5.stroke(this.strokes[n][0], this.strokes[n][1], this.strokes[n][2]);
        // loop over the visible screen evaluating datapoints
        for (var i = -size / 2*scale; i < size / 2*scale; i += lineTick) {
          let scope = {
            x: i,
          };
          current = this.evalGraphPoint(eqn, scope);
          if (i != -size / 2*scale) {
            // draw a line between the last point and this one
            p5.line(scale * (i - lineTick), scale * -last, scale * i, scale * -current);
          }
          last = current;
        }
        p5.pop();
      }
    };
  }

  //presenter functions

  /**
   * Presenter rendering function
   * @returns rendered page to the View layer
   */
  render() {
    return (
      <View>
        <Header name="Graph Screen" />
        <View style={styles.content}>
          <ReactP5Wrapper sketch={this.sketch} />
        </View>
      </View>
    );
  }
}
