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
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";

import Main from "./Main";
import Header from "../component/Header";
import Button from "../component/Button";
import {Strings, Styles, Colors, Images, Config} from "../resource";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      same: false,
      phoneNum: "",
      num: false ,
      password: "",
      repassword: "",
      Idcode: "",
      Viewed: true,
      Username: "",
      Filled: false,
      PasswordLength: false
    };
  }

  componentDidMount() {}

  //todo:正则
  render() {
    return(
      <View>
        <Header
          Header={Strings.SignUp.ToSignUp}
          navigator={this.props.navigator}
          iconName={Images.Common.Back} />
        <View style={[Styles.Center, {marginTop: Styles.Height(30)}]}>
          <View style={[styles.Input]}>
            <TextInput
              style={{flex: 1}}
              placeholder={Strings.SignUp.PhoneNumber}
              keyboardType="numeric"
              onChangeText={this.onCheckNum}
              maxLength={11}
              onBlur={this.CheckNum} />
          </View>
          <View>
            <Text style={{color:Colors.crimson, position: "absolute"}}>{ isNaN(this.state.phoneNum) || this.state.num ? Strings.SignUp.CheckedNum : "" }</Text>
          </View>
          <View style={[styles.Input]}>
            <TextInput
              style={{flex: 1}}
              placeholder={Strings.SignUp.Identify}
              onChangeText={(Idcode) => this.setState({Idcode})}
              onChange={this.CheckFilled} />
          </View>
          <View style={[styles.Input]}>
            <TextInput
              style={{flex: 1}}
              placeholder={Strings.SignUp.UserName}
              onChangeText={(Username) => this.setState({Username})}
              onChange={this.CheckFilled} />
          </View>
          <View style={[styles.Input]}>
            <TextInput
              style={{flex: 1}}
              placeholder={Strings.SignUp.Password}
              secureTextEntry={true}
              maxLength={12}
              onChangeText={this.password}
              onBlur={this.CheckPassword}
              />
          </View>
          <View>
            <Text style={{color: Colors.crimson}}>{this.state.PasswordLength ? Strings.SignUp.wrong : ""}</Text>
          </View>
          <View style={[styles.Input]}>
            <TextInput
              style={{flex: 1}}
              placeholder={Strings.SignUp.RePassword}
              secureTextEntry={true}
              maxLength={12}
              onChangeText={this.rePassword}
              />
          </View>
          <View>
            <Text style={{color:Colors.crimson}}>{this.state.same ? Strings.SignUp.Checked : "" }</Text>
          </View>
          <View style={[Styles.Row, Styles.Center]}>
            <TouchableOpacity
              onPress={this.Viewed}
              style={[styles.Viewed, {backgroundColor: this.state.Viewed ?  Colors.lightPink : Colors.white }]}/>
            <View>
              <Text>{Strings.SignUp.Contract}</Text>
            </View>
          </View>
            <Button
              Opacity={this.state.Filled}
              title={Strings.SignUp.Finish}
              onClick={this.state.Filled ? this.Finish : null } />
        </View>
      </View>
    );
  }

  //todo: 回调

  password = (password) =>{
    this.setState({
      password
    });
    if(this.state.repassword.length >= this.state.password.length){
      if (this.state.password !== this.state.repassword) {
        this.setState({same: true});
      } else {
        this.setState({same: false});
      }
    }
  };


  rePassword = (repassword) => {
    this.setState({
      repassword: repassword
    });
    console.log(this.state.password);
    console.log(repassword);
    if(repassword.length === this.state.password.length && this.state.password !== ""){
      console.log("22");
      if (this.state.password !== repassword) {
        this.setState({same: true});
      } else {
        this.setState({same: false});
      }
      console.log(this.state.same);
      if (this.isFilled()) {
        this.setState({Filled: true});
      } else {
        this.setState({Filled: false});
      }
    }else {
      this.setState({same: true});
      this.setState({Filled: false});
    }
    console.log(this.state.same + "3");
  };

  //todo: 不能用失焦
  Check = () => {
     if (this.state.password !== this.state.repassword) {
       this.setState({same: true});
     } else {
       this.setState({same: false});
     }
  };

  //todo: &&
  Finish = () => {
    //todo: 判断
    let {navigator} = this.props;
    navigator && navigator.push({
      name: Config.Navigation.Login,
      component: Main
    })
  };

  onCheckNum = (phoneNum) => {
    this.setState({
      phoneNum
    });
    console.log(this.state.phoneNum.length);
    if(this.state.phoneNum.length >= 10){
      console.log("?????");
      if (this.isFilled()) {
        this.setState({Filled: true});
      } else {
        this.setState({Filled: false});
      }
    }
  };
  //todo: onChangeText
  CheckNum = () => {
    if(this.state.phoneNum.length !== 11){
      console.log("mmmm");
      this.setState({num: true});
    }else{
      this.setState({num: false});
    }
  };

  //todo:
  Viewed = () => {
    console.log(this.state.same);
    if (this.isFilled()) {
      this.setState({Filled: true});
    } else {
      this.setState({Filled: false});
    }
  };

  //todo: onchange text
  CheckFilled = () => {
    if(this.isFilled()){
      this.setState({Filled: true});
    } else {
      this.setState({Filled: false});
    }
  };

  //todo: onchange text
  CheckPassword = () => {
    if(this.state.password.length < 6){
      this.setState({PasswordLength : true})
    } else {
      this.setState({PasswordLength : false})
    }
    if(this.state.password !== this.state.repassword && this.state.repassword !== "") {
      this.setState({same: true});
    }else{
      this.setState({same: false});
    }
  };

  isFilled = () => {
    return !this.state.PasswordLength && !this.state.num && this.state.Username !== "" && this.state.Idcode !== "" && !this.state.same && this.state.Viewed && this.state.password !== "" && this.state.repassword !== "" && this.state.phoneNum !== "";
  }
}
const styles = {
  Header: {
    margin: Styles.Height(30),
    height: Styles.Height(60),
    width: Styles.WidthUseWindow.width,
    backgroundColor: Colors.MainColor,

  },

  Input: {
    margin: Styles.Height(20),
    height: Styles.Height(80),
    width: Styles.Height(600),
    borderColor: Colors.classifyGrey,
    borderBottomWidth: 1
  },

  Viewed: {
    height: 10,
    width: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.lightPink,
    marginRight: 10
  }
};
