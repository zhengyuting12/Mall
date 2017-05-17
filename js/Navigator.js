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

import React from "react";
import {Navigator, View, BackAndroid} from "react-native";
import {Styles, Config} from "./resource";
import Splash from "./pages/Splash";
import {isAndroid} from "./util/system";
import {Events} from "./util/events";

export default class FrameWork extends React.Component {
  constructor(props) {
    super(props);

    this.configureScene = this.configureScene.bind(this);
    this.renderScene = this.renderScene.bind(this);
    this.onBackAndroid = this.onBackAndroid.bind(this);
  }

  componentDidMount() {
    if (isAndroid()) {
      BackAndroid.addEventListener(Events.Android.HardwareBackPress, this.onBackAndroid);
    }
  }

  componentWillUnMount() {
    if (isAndroid()) {
      BackAndroid.removeEventListener(Events.Android.HardwareBackPress, this.onBackAndroid);
    }
  }

  render() {
    return (
      <View style={Styles.Flex}>
        <Navigator
          style={Styles.Flex}
          ref={(nav) => this.navigator = nav}
          initialRoute={{
            name: Config.Navigation.Splash,
            component: Splash
          }}
          configureScene={this.configureScene}
          renderScene={this.renderScene} />
      </View>
    );
  }

  renderScene(route, navigator) {
    let Component = route.component;

    /* 传递组件额外属性 */
    if (route.props) {
      return (<Component navigator={navigator} route={route} {...route.props} />);
    }
    return (<Component navigator={navigator} route={route} />);
  }

  configureScene() {
    return Navigator.SceneConfigs.FadeAndroid;
  }

  onBackAndroid() {
    const nav = this.navigator;
    if (nav && nav.getCurrentRoutes().length > 1) {
      nav.pop();
      return true; //返回 true 表示消费该事件
    }
  }
}
