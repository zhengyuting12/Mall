/*
 * MIT License
 *
 * Copyright (c) 2017 SmartestEE Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

"use strict";

import React, {Component} from "react";

import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ListView,
  ScrollView
} from "react-native";

import {Colors, Strings, Styles} from "../resource";
import {ClassifyData} from "./ClassifyData" ;
import Goods from "./Goods";
import TestList from "./TestList"


export default class Classify extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }
  }

  render() {

    return (
      <View style={[Styles.Row, {height:600, backgroundColor:"#efefef", marginTop: 20}]}>
        <View>
          {ClassifyData.map((ele, i) => {
            const isSelected = (this.state.value === i );
            return (
              <TouchableOpacity
                style={[isSelected ? {backgroundColor:"#efefef"} : {backgroundColor:"#ffffff"},{marginTop:5}]}
                onPress={() => this.onShowDetail(ClassifyData[i].Heading)}>
                <TestList
                  key={i}
                  Heading={ClassifyData[i].Heading} />
              </TouchableOpacity>
            );
          })}
        </View>
        <View>
          {ClassifyData[this.state.value].Item.map((ele, i) => {
            if (i % 2 == 0) {
              if (i + 1 < ClassifyData[this.state.value].Item.length) {
                return (
                  <View style={Styles.Row}>
                    <Goods
                      key={i}
                      name={ClassifyData[this.state.value].Item[i].name}
                      price={ClassifyData[this.state.value].Item[i].price}
                      image={ClassifyData[this.state.value].Item[i].image} />
                    <Goods
                      key={i + 1}
                      name={ClassifyData[this.state.value].Item[i+1].name}
                      price={ClassifyData[this.state.value].Item[i+1].price}
                      image={ClassifyData[this.state.value].Item[i+1].image} />
                  </View>
                );
              }
              else
                return (
                  <Goods
                    key={i}
                    name={ClassifyData[this.state.value].Item[i].name}
                    price={ClassifyData[this.state.value].Item[i].price}
                    image={ClassifyData[this.state.value].Item[i].image} />
                );
            }
          })}
        </View>
      </View>
    );
  }

  onShowDetail(tab) {
    switch (tab) {
      case ClassifyData[0].Heading:
        this.setState({
          value: 0
        });
        break;

      case ClassifyData[1].Heading:
        this.setState({
          value: 1
        });
        break;

      case ClassifyData[2].Heading:
        this.setState({
          value: 2
        });
        break;
    }
  }
}
