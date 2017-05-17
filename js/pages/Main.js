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
import {connect} from "react-redux";
import {View} from "react-native";
import {
  Button,
  Container,
  Content,
  Footer,
  FooterTab,
  Text
} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

import ShopHome from "./ShopHome";
import Classify from "./Classify";
import Discover from "./Discover";
import ShopCartDemo from "./ShopCartDemo";
import Personal from "./Personal";

import {Styles, Images, Strings} from "../resource";
import {Config} from "../config";
import {switchFooterTab} from "../actions";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.tabItemRender = this.tabItemRender.bind(this);
    this.onFooterTabChanged = this.onFooterTabChanged.bind(this);
    this.state = {
      selectTab: Config.FooterTabs.ShopHome
    };
  }

  render() {
    return (
      <Container>
        <Content scrollEnabled={false} style={Styles.MainContent}>
          {this.contentRender()}
        </Content>
        <Footer style={Styles.Tab}>
          <FooterTab>
            {this.tabItemRender(Strings.Tab.ShopHome, Images.Tab.IconShopHome, Images.Tab.IconShopHomeFocus, Config.FooterTabs.ShopHome)}
            {this.tabItemRender(Strings.Tab.Classify, Images.Tab.IconClassify, Images.Tab.IconClassifyFocus, Config.FooterTabs.Classify)}
            {this.tabItemRender(Strings.Tab.Discover, Images.Tab.IconDiscover, Images.Tab.IconClassifyFocus, Config.FooterTabs.Discover)}
            {this.tabItemRender(Strings.Tab.ShopCart, Images.Tab.IconShopCart, Images.Tab.IconShopCartFocus, Config.FooterTabs.ShopCart)}
            {this.tabItemRender(Strings.Tab.Personal, Images.Tab.IconPersonal, Images.Tab.IconPersonalFocus, Config.FooterTabs.Personal)}
          </FooterTab>
        </Footer>
      </Container>
    );
  }

  /**
   * @param title: 底部文字
   * @param normal: 正常图片
   * @param focused: 选中图片
   * @param tab: 标签
   * @returns {XML}
   */
  tabItemRender(title, normal, focused, tab) {
    const isSelected = (this.props.selectedTab == tab);

    return (
      <View style={[Styles.Flex, {backgroundColor: "#ffffff"}]}>
        <Button onPress={() => this.onFooterTabChanged(tab)}>
          <Icon name={isSelected ? focused : normal} size={Styles.TabIcon.size}
                color={isSelected ? Styles.TabIcon.focused : Styles.TabIcon.normal} />
          <Text style={isSelected ? Styles.TabTitleFocused : Styles.TabTitle}>{title}</Text>
        </Button>
      </View>
    );
  }

  contentRender() {
    let {navigator, route} = this.props;

    switch (this.props.selectedTab) {
    case Config.FooterTabs.ShopHome:
      return (<ShopHome navigator={navigator} route={route} />);

    case Config.FooterTabs.Classify:
      return (<Classify navigator={navigator} route={route} />);

    case Config.FooterTabs.Discover:
      return (<Discover navigator={navigator} route={route} />);

    case Config.FooterTabs.ShopCart:
      return (<ShopCartDemo navigator={navigator} route={route} />);

    case Config.FooterTabs.Personal:
      return (<Personal navigator={navigator} route={route} />);

      // skip default
    }
  }

  onFooterTabChanged(tab) {
    this.props.dispatch(switchFooterTab(tab));
  }
}

function select(store) {
  return {
    selectedTab: store.navigation.tab
  };
}

export default connect(select)(MainPage);
