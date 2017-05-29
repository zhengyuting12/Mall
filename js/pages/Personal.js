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

import Header from "../component/Header"
import LogInPage from "./LogInPage";
import Icon from "react-native-vector-icons/Ionicons";
import {Strings, Styles, Images, Colors} from "../resource";

const datas = [
  {images: Images.personal.dress1},
  {images: Images.personal.dress2},
  {images: Images.personal.dress3}];

export default class ShopHome extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(datas)
    }
  }

  render() {
    return (
      <ScrollView style={{height:600}}>
       <Header Header={Strings.My}/>
        <Image
          source={Images.Personal}
          style={[Styles.WidthUseWindow, {height: 200}]}>
          <View
            style={[Styles.WidthUseWindow, Styles.Row]}>
            <TouchableOpacity
              style={{marginLeft:10, flex:1}}>
              <Icon
                name="ios-settings"
                size={30}
                color={Colors.white}/>
            </TouchableOpacity>
          </View>
          <View
            style={[Styles.Center, Styles.WidthUseWindow, Styles.FlexColumn, {height: 180}]}>
            <View
              style={styles.UserPhoto}/>
             <TouchableOpacity onPress={this.LoginPage}>
              <View
                style={[styles.LoginButton, Styles.Center]}>
                <Text style={{color: Colors.white}}>{Strings.LogIn}</Text>
              </View>
             </TouchableOpacity>
          </View>
        </Image>
        <View
          style={[Styles.WidthUseWindow, Styles.RCenter, Styles.Row, styles.OrderList]}>
          <View style={{flex:1}}>
            <Text
              style={{padding:10, color: Colors.iconGrey}}>
              {Strings.List.Order}</Text>
          </View>
          <View>
            <Text
              style={{padding:10, color: Colors.iconGrey}}>
              {Strings.ViewOrder}</Text>
          </View>
        </View>
        <View style={[Styles.Row, Styles.WidthUseWindow, Styles.Center, {height: 80, margin: 1}]}>
          {this.tabItemRender(Strings.List.WillPay, "md-send")}
          {this.tabItemRender(Strings.List.WillComment, "md-quote")}
          {this.tabItemRender(Strings.List.WillDeliver, "md-cube")}
          {this.tabItemRender(Strings.List.WillPay, "md-attach")}
          {this.tabItemRender(Strings.List.Return, "ios-sad")}
        </View>
        <View
          style={[Styles.Row, Styles.Center, Styles.WidthUseWindow, {height: 80, marginTop: 8, borderWidth: 2, borderColor: Colors.favouriteGrey}]}>
          <View style={{flex:1, borderRightWidth: 2, borderColor: Colors.favouriteGrey}}>
            {this.tabItemRenderBigger(Strings.List.MyTrace, "ios-sad", Colors.Main.Firstthree)}
          </View>
          <View style={{flex:1, borderRightWidth: 2, borderColor: Colors.favouriteGrey}}>
            {this.tabItemRenderBigger(Strings.List.Return, "ios-sad", Colors.Main.Firstthree)}
          </View>
          <View style={{flex:1}}>
            {this.tabItemRenderBigger(Strings.List.Ebean, "ios-sad", Colors.Main.Firstthree)}
          </View>
        </View>
        <View style={[Styles.CCenter, {height: 50, borderWidth: 1, borderColor: Colors.favouriteGrey, backgroundColor: Colors.favouriteGrey}]}>
          <Text style={{padding:4, color: Colors.iconGrey}}>{Strings.Purchase.recommand}</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData, i1, i2) => this.getRow(rowData, i1, i2)}
          horizontal={true} />
      </ScrollView>
    );
  }

  LoginPage = () => {
    this.props.navigator.push({
      name: "LoginPage",
      component: LogInPage
    })
  }

  getRow = (rowData, i1, i2) => {
    return (
      <TouchableOpacity>
        <View
          style={{ height: 150, width: 160}}>
          <Image source={rowData.images} style={{width: 150, height: 145}} />
        </View>
      </TouchableOpacity>
    );
  }

  tabItemRender(title, tab) {

    return (
      <View style={[Styles.Center, Styles.Flex, {height: 50}]}>
        <TouchableOpacity onPress={() => this.onFooterTabChanged()}>
          <Icon name={tab}
                size={35}
                color={Colors.Main.Firstfour}/>
        </TouchableOpacity>
        <Text style={[Styles.Center,{color: Colors.iconGrey}]}>{title}</Text>
      </View>
    );
  }

  tabItemRenderBigger(title, tab, color) {

    return (
      <View style={[Styles.Center,Styles.WidthUseWindowthree]}>
        <TouchableOpacity onPress={() => this.onFooterTabChanged()}>
          <Icon name={tab}
                size={35}
                color={color}/>
        </TouchableOpacity>
        <Text style={[Styles.Center,{color: Colors.iconGrey}]}>{title}</Text>
      </View>
    );
  }
}

const styles = {
  UserPhoto: {
    width: 80,
    height: 80,
    borderColor: Colors.favouriteGrey,
    borderWidth: 1,
    borderRadius: 40,
    backgroundColor: Colors.white
  },

  LoginButton: {
    width: 80,
    height: 30,
    borderColor: Colors.MainColor,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: Colors.Firstthree,
    marginTop: 10
  },

  OrderList: {
    marginTop: 5,
    height: 50,
    borderBottomWidth: 1,
    borderColor: Colors.favouriteGrey
  }

}
