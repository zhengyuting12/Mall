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

import React, { Component, PropTypes } from 'react'
import {
  View,
  TouchableOpacity,
  Text
} from "react-native";
import {Styles} from "../resource";

import {connect} from 'react-redux';
import {add, reduce} from "../actions";

class ShopCartDemo extends Component {
  render() {
    const { count } = this.props;
    return (
      <View style={{...Styles.Row, ...styles.margin}}>
          <TouchableOpacity
            onPress={() => this.reduce(count)}>
            <Text>-</Text>
          </TouchableOpacity>
          <View>
            <Text>{count}</Text>
          </View>
        <TouchableOpacity
          onPress={() => this.add(count)}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    )
  }

  add = (c) => {
    this.props.dispatch(add(c));
  };

  reduce = (c) => {
    this.props.dispatch(reduce(c));
  };
}

const styles = {
  margin: {
    marginTop: 30
  }
};

function select(store) {
  return {
    count: store.count.count
  }
}

export default connect(select)(ShopCartDemo);
