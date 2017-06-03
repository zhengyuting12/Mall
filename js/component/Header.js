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

import React, {Component} from "react";
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";

import {
  Left
} from "native-base"

import {Styles, Colors} from "../resource"
import Icon from "react-native-vector-icons/Ionicons";

//todo: line 59
export default class Header extends Component {
  render() {
    let {Header, iconName}=this.props;
    return (
      <View style={[styles.header, Styles.WidthUseWindow, Styles.Row]}>
        <Left>
          <View
            style={[Styles.Row, {alignItems: "center"}]}>
            {iconName ?
              <TouchableOpacity onPress={this.onBack}>
                <Icon
                  name={iconName}
                  size={30}
                  style={{marginLeft: 10, marginRight: 10, color: Colors.iconGrey}}/>
              </TouchableOpacity> : null}
            <Text style={{padding: 10, fontSize: 20, color:Colors.iconGrey}}>{Header}</Text>
          </View>
        </Left>
        <TouchableOpacity style={[Styles.Row, {alignItems: "center"}]}>
          <Icon name="ios-more" size={30} color={Colors.iconGrey} style={{marginRight:10}}/>
        </TouchableOpacity>
      </View>
    );
  }

  onBack = () => {
    this.props.navigator.pop()
  };
}

const styles = {
  header: {
    height: 50,
    backgroundColor: Colors.MainColor,
    marginTop: 20
  }
};