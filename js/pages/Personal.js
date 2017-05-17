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
import {
  Left
}from "native-base"

import Icon from "react-native-vector-icons/Ionicons";
import {Strings, Styles, Images} from "../resource";

const datas = [
  {images: require("../../images/product.png")},
  {images: require("../../images/product.png")},
  {images: require("../../images/product.png")}];


export default class ShopHome extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(datas)
    }
  }


  render() {

    return (
      <ScrollView style={{height:600}}>
        <View style={[{height: 50, backgroundColor: "#ffd66f",marginTop: 20}, Styles.WidthUseWindow, Styles.Row]}>
          <Left>
            <View style={[Styles.Row, {alignItems: "center"}]}>
              <Icon name="ios-arrow-back" size={30} style={{marginLeft: 10, marginRight: 10}} />
              <Text style={{fontSize: 20}}>{Strings.My}</Text>
            </View>
          </Left>
          <View style={[Styles.Row, {alignItems: "center"}]}>
            <Icon name="md-share" size={30} style={{marginRight:10}} />
            <Icon name="ios-more" size={30} style={{marginRight:10}} />
          </View>
        </View>
        <Image source={Images.ShopHome} style={[Styles.WidthUseWindow, {height: 200}]}>
          <View style={[Styles.WidthUseWindow, Styles.Row]}>
            <View style={{marginLeft:10, flex:1}}>
              <Icon name="ios-settings" size={30} color={"#fff"}/>
            </View>
            <View style={{marginRight:10}}>
              <Icon name="md-chatbubbles" size={30} color={"#fff"}/>
            </View>
          </View>
          <View style={[Styles.Center, Styles.WidthUseWindow, Styles.FlexColumn, {height: 180}]}>
            <View
              style={[{width: 80, height: 80, borderColor: "#efefef", borderWidth: 1, borderRadius: 40, backgroundColor: "#FFF"}]}/>
            <View
              style={[{width:80, height: 30, borderColor: "#ff8957", borderWidth: 1,borderRadius: 10, backgroundColor: "#ff8957", marginTop: 10}, Styles.Center]}>
              <Text style={{color:"#fff"}}>{Strings.LogIn}</Text>
            </View>
          </View>
        </Image>
        <View
          style={[Styles.WidthUseWindow, Styles.RCenter, Styles.Row, {marginTop: 5, height: 50, backgroundColor: "#ff8957"}]}>
          <View style={{flex:1}}>
            <Text>{Strings.List.Order}</Text>
          </View>
          <View>
            <Text>{Strings.ViewOrder}</Text>
          </View>
        </View>
        <View style={[Styles.Row, Styles.WidthUseWindow, Styles.Center, {height: 80, margin: 1}]}>
          {this.tabItemRender(Strings.List.Order, "md-send")}
          {this.tabItemRender(Strings.List.WillComment, "md-quote")}
          {this.tabItemRender(Strings.List.WillDeliver, "md-cube")}
          {this.tabItemRender(Strings.List.WillPay, "md-attach")}
          {this.tabItemRender(Strings.List.Return, "ios-sad")}
        </View>
        <View
          style={[Styles.Row, Styles.Center, Styles.WidthUseWindow, {height: 80, marginTop: 8, borderWidth: 2, borderColor: "#dbdbdb"}]}>
          <View style={{flex:1, borderRightWidth: 2, borderColor: "#dbdbdb"}}>
            {this.tabItemRenderBigger(Strings.List.Return, "ios-sad")}
          </View>
          <View style={{flex:1, borderRightWidth: 2, borderColor: "#dbdbdb"}}>
            {this.tabItemRenderBigger(Strings.List.Return, "ios-sad")}
          </View>
          <View style={{flex:1}}>
            {this.tabItemRenderBigger(Strings.List.Return, "ios-sad")}
          </View>
        </View>
        <View style={[Styles.CCenter, {height: 50, borderWidth: 1, borderColor: "#dbdbdb"}]}>
          <Text style={{padding:4}}>{Strings.Purchase.recommand}</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData, i1, i2) => this.getRow(rowData, i1, i2)}
          horizontal={true} />
      </ScrollView>
    );
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
                color={"#ff8957"}/>
        </TouchableOpacity>
        <Text style={Styles.Center}>{title}</Text>
      </View>
    );
  }

  tabItemRenderBigger(title, tab) {

    return (
      <View style={[Styles.Center,Styles.WidthUseWindowthree]}>
        <TouchableOpacity onPress={() => this.onFooterTabChanged()}>
          <Icon name={tab}
                size={35}
                color={"#ff8957"}/>
        </TouchableOpacity>
        <Text style={Styles.Center}>{title}</Text>
      </View>
    );
  }
}
