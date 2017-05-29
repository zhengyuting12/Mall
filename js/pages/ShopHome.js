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
  Text,
  ScrollView,
  ListView,
  TextInput
} from "react-native";

import {Strings, Styles, Colors} from "../resource";
import Icon from "react-native-vector-icons/Ionicons";
import Swipe from "../component/ScrollPhoto";
import {CircleData, CircleData2, listData} from "./CircleData" ;
import Circle from "../component/Circle";
import Goods from "../component/Goods";

export default class ShopHome extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(listData)
    };
  }

  render() {
    return (
      <ScrollView style={{height: Styles.Height(1180)}}>
        <View style={[{marginTop: 20, marginBottom: 35, width: Styles.Width(720)}]}>
          <Swipe />
          <View style={[styles.adImage, Styles.Row]}>
            <View style={[Styles.Row, {height: 40, width: 80, margin: 10}]}>
              <TouchableOpacity>
                <Text style={{padding: 4, color: "#fff", fontSize: 14}}>{Strings.position}</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[Styles.Row, styles.searchView]}>
              <View
                style={[{marginLeft: 10, marginTop: 3}, Strings.Row]}>
                <Icon name="ios-search" size={30}/>
              </View>
              <View
                style={{width: 250, height: 40}}>
                <TextInput
                  style={{flex: 1, fontSize: 15}}
                  placeholder={Strings.SearchBar} />
              </View>
            </View>
          </View>
          <View style={[Styles.Row, styles.tabsView]}>
            {CircleData.map((ele, i) => {
              return (
                <Circle
                  key={i}
                  title={ele.title}
                  color={ele.color}
                  iconName={ele.iconName} />
              );
            })}
          </View>
          <View style={[Styles.Row, styles.tabsView]}>
            {CircleData2.map((ele, i) => {
              return (
                <Circle
                  key={i}
                  title={ele.title}
                  color={ele.color}
                  iconName={ele.iconName} />
              );
            })}
          </View>
          <View style={{marginTop: 10, backgroundColor: Colors.lightGrey, height: 20, width: Styles.Width(720)}}/>
          <View style={[{width: Styles.Width(720), marginLeft: 8}]}>
            {listData.map((ele, i) => {
              if (i % 2 === 0) {
                if (i + 1 < listData.length) {
                  return (
                    <View
                      key={i}
                      style={Styles.Row}>
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
                } else {
                  return (
                    <Goods
                      key={i}
                      price={listData[i].price}
                      image={listData[i].image}
                      name={listData[i].name} />
                  );
                }
              }
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  adImage: {
    width: Styles.Width(720),
    position: "absolute"
  },

  tabsView: {
    marginTop: 10,
    width: Styles.Width(720),
    justifyContent: "center"
  },

  searchView: {
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: "#fff", //todo
    borderRadius: 30,
    marginTop: 5
  }
};
