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
  Text,
  Image,
  Dimensions,
  TextInput,
  ScrollView
} from "react-native";

import Main from "./Main";
import Button from "./Button";
import Icon from "react-native-vector-icons/Ionicons";
import {Strings, Styles, Images, Config} from "../resource";

export default class LogInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstText: Strings.Login.UserName,
      secondText: Strings.Login.Password
    };
  }

  render() {
    return (
      <View style={[Styles.WidthUseWindow, {marginTop: 20, alignItems: "center", height: 600}]}>
        <View style={[styles.row, {height:30}]}>
          <View style={[{flex: 1}, {justifyContent: "center", marginLeft: 10}]}>
            <Icon name={"ios-close"} size={30} />
          </View>
          <TouchableOpacity onPress={this.SignUp}>
            <View style={[ {justifyContent: "center", marginRight: 10}]}>
              <Text style={{fontSize: 10}}>{Strings.Login.SignUp}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.imageStyle, styles.row]}>
          <Image source={Images.HeadPhoto}
                 style={styles.headPhoto} />
        </View>
        <View
          style={{height: 20, width: Styles.Width(720) - 40 , borderColor: "#aeaeae", borderBottomWidth: 1, marginTop:30}}>
          <TextInput
            style={{flex: 1}}
            placeholder={this.state.firstText}
            onChangeText={(firstText) => this.setState({firstText})}
            value={this.state.firstText}
            clearTextOnFocus={true} />
        </View>
        <View
          style={{height: 20, width: Styles.Width(720) - 40 , borderColor: "#aeaeae", borderBottomWidth: 1, marginTop: 30}}>
          <TextInput
            style={{flex: 1}}
            placeholder={this.state.secondText}
            onChangeText={(secondText) => this.setState({secondText})}
            value={this.state.secondText}
            clearTextOnFocus={true}
            secureTextEntry={true} />
        </View>
        <TouchableOpacity>
          <View style={styles.buttonStyle}>
            <Button
              title={Strings.Login.ToLogin}
              onClick={this.onLogin} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{marginLeft: Styles.Width(720) - 100, marginTop: 10}}>
            <Text style={{color:"#777777"}}>{Strings.Login.Iforget}</Text>
          </View>
        </TouchableOpacity>
        <View style={{marginTop: 20}}>
          <Text style={{color:"#777777"}}>{Strings.Login.More}</Text>
        </View>
        <TouchableOpacity>
          <Image source={Images.Wechat} style={{width:40, height:40}} />
        </TouchableOpacity>
      </View>
    );
  }

  onLogin = () => {
    this.props.navigator.push({
      name: Config.Navigation.Login,
      component: Main
    })
  };

  SignUp = () => {
    this.props.navigator.push({
      name: "Main",
      component: Main
    })
  }
}

const styles = {
  row: {
    flexDirection: "row"
  },

  imageStyle: {
    justifyContent: "center",
    height: 200,
    width: Styles.Width(720),
    marginTop: 20
  },

  buttonStyle: {
    marginTop: 20,
    backgroundColor: "#60b6ff",
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    height: 40,
    width: Styles.Width(720) - 60
  },

  headPhoto: {
    marginTop: 100,
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: "#efefef",
    borderRadius: 50
  }
};
