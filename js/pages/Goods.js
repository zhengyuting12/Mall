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
  Text,
  TouchableOpacity,
  Image
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

export default class Goods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: "ios-cart-outline",
      selected: false
    }
  }

  render() {
    let {name, price, image} = this.props;

    return (
      <View style={[{width: 150, height: 150, marginLeft: 20, marginTop: 40}]}>
        <Image source={image} style={[{width: 150, height: 120, marginBottom: 10}]} />
        <View style={{marginBottom:10}}>
          <Text>{name}</Text>
        </View>
        <View style={[styles.row]}>
          <View style={[styles.priceStyle, styles.row, {flex: 1}]}>
            <Text style={[{fontSize: 20}]}>￥{getPrice(price).x}</Text>
            <Text style={[{fontSize: 15, marginTop:5}]}>{getPrice(price).y}</Text>
          </View>
          <TouchableOpacity onPress={this.onPop}>
            <Icon name={this.state.icon} color={"#f00"} size={25}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  onPop = () => {
    if (this.state.selected) {
      this.setState({
        icon: "ios-cart-outline",
        selected: false
      })
    } else {
      this.setState({
        icon: "ios-cart",
        selected: true
      })
    }

  }

}

function getPrice(price) {  //price是参数，价格
  //我们后面会处理字符串，但因为输入的price参数不一定是字符串，所以先把参数转化成字符串类型
  let pri = String(price);
  //最后需要输出的是整数、小数点、小数三个部分，所以定义一个对象来保存这些值，初始值都是空字符串
  let obj = {
    x: '', //用x表示整数部分
    dot: '',  //用dot表示小数点
    y: '' //用y表示小数部分
  };

  //这个函数的核心算法就是截取字符串，首先用小数点的位置来定位，就是获取小数点的位置，用indexOf()函数
  let dotP = pri.indexOf('.'); //indexOf是字符串对象的函数，
                               //参数是一个需要寻找的字符，返回值是下标，从0开始，如果找不着，则返回-1

  //然后判断一下dotP是否是-1，也是就有没有小数点
  if (dotP == -1) {
    obj.x = pri;
  } else {
    //如果dotP不等于-1，也就是说是有小数点的，就可以截取字符串了
    //截取字符串的函数式subString(), 也是字符串的函数，参数是截取的范围，如下
    obj.x = pri.substring(0, dotP);
    //  obj.dot = pri.substring(dotP, dotP+1);
    obj.y = pri.substring(dotP);
    //你也可以自己测试一下这个函数，看看里面的参数都是什么含义
  }

  return obj;
}

const styles = {
  row: {
    flexDirection: "row"
  },

  priceStyle: {
  }
};
