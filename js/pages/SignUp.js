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
import {Strings, Styles, Images} from "../resource";

import {
  View,
  TouchableOpacity,
  Image,
  Text
} from "react-native";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { text: Strings.SignUp };
  }
  render(){
    return(
      <View>
       <View style={styles.Header}>
         <Text>{Strings.SignUp.ToSignUp}</Text>
       </View>
       <TextInput
         Styles={[Styles.Center,styles.Input]}
         onChangeText={(text) => this.setState({text})}

       />
      </View>
    );
  }
}
const styles = {
  Header: {
    marginTop: 30,
    height: 60,
    width: Styles.WidthUseWindow,
    color: "#ffa03f"
  },

  Input: {
    height: 60,
    marginTop: 20,
    width: 200,
    borderColor: "#efefef",
    borderWidth: 1,
    borderRadius: 5
  }


}