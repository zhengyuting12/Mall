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
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  ListView
} from "react-native";

import {Strings, Styles, Images} from "../resource";
import Icon from "react-native-vector-icons/Ionicons";
import {CircleData, CircleData2, listData} from "./CircleData" ;
import Circle from "./Circle";
import Goods from "./Goods";

export default class ShopHome extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(listData)
    }
  }

  render() {
    return (
      <ScrollView style={{height: 620}}>
        <View style={[{marginTop: 20, marginBottom: 35}, Styles.WidthUseWindow]}>
          <Image source={Images.ShopHome} style={[{width: 400, height: 200}, Styles.Row]}>
            <View style={[Styles.Row, {height: 40, width: 80, margin: 10}]} >
              <Icon name="ios-locate-outline" size={25} color={"#fff"} />
              <TouchableOpacity>
                <Text style={{padding: 4, color: "#fff", fontSize: 20}}>{Strings.position}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[Styles.Row, {backgroundColor: 'rgba(255, 255, 255, 0.75)', height: 40, width: 250,border: 1, borderColor: "#fff", borderRadius: 30, marginTop: 5}]}>
              <View style={{marginLeft: 10, marginTop: 3}}>
                <Icon name="ios-search" size={30} />
              </View>
            </View>
          </Image>
          <View style={[Styles.Row, {marginTop: 10}]}>
            {CircleData.map((ele, i) => {
              return (
                <Circle
                  title={ele.title}
                  color={ele.color}
                  iconName={ele.iconName}/>
              );
            })}
          </View>
          <View style={[Styles.Row, {marginTop: 10}]}>
            {CircleData2.map(( ele , i ) => {
              return (
                <Circle
                  title={ele.title}
                  color={ele.color}
                  iconName={ele.iconName} />
              );
            })}
          </View>
          <View>
            {listData.map(( ele , i ) => {
             if( i % 2 === 0 ){
               if(i + 1 < listData.length){
              return (
                <View style={Styles.Row}>
                  <Goods
                    price={listData[i].price}
                    image={listData[i].image}
                    name={listData[i].name} />
                  <Goods
                    price={listData[i + 1].price}
                    image={listData[i + 1].image}
                    name={listData[i + 1].name} />
                </View>
              );
             }
             else
               return(
                 <Goods
                   price={listData[i].price}
                   image={listData[i].image}
                   name={listData[i].name} />
               );
             }
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}
