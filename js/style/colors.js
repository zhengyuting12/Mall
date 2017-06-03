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

const favoriteBlack = "#323232";
const favoriteGrey = "#efefef";
const favoriteYellow = "#cbb86d";
const fontGrey = "#939393";

const TRANSPARENT = "rgba(0,0,0,0)";

export const Color = {
  white: "#ffffff",
  black: "#000000",
  grey: fontGrey,
  favouriteGrey: "#efefef",
  MainColor: "#a4dde7",
  iconGrey: "#737373",
  yellow: "#ffff00",
  blue: "#0000ff",
  green: "#00ff00",
  lightPink: "#FFB6C1",
  crimson: "#DC143C",
  violet: "#EE82EE",
  indigo: "#4B0082",
  skyBlue: "#87CEEB",
  lightCyan: "#E1FFFF",
  lightGrey: "#f7f6f6",
  turquoise: "#40E0D0",
  orange: "#ff7f24",

  //主页圆圈色
  Main: {
    Firstone: "#bce458",
    Firsttwo: "#53ebe2",
    Firstthree: "#ffc0a4",
    Firstfour: "#ffde6b",
    Firstfive: "#62c3d0",
    Secone: "#f9ff72",
    Sectwo: "#e9cbdd",
    secthree: "#f4af78",
    secfour: "#ffbbde",
    secfive: "#aec9e8"
  },

  //商品详情页
  priceRed: "#e62129",

  //分类页
  classifyGrey: "#e5e5e5",
  classifyTextOrange: "#fc8e24",

  //我的
  personalOrange: "#fc8e24",

  transparent: TRANSPARENT,

  // 底部导航
  tabTextFocused: favoriteYellow,

  // 背景色
  Background: {
    Common: favoriteBlack,
    Tab: favoriteGrey,
    Category: favoriteGrey,
    Office: favoriteGrey,
    Setting: favoriteGrey,
    ArticleList: favoriteGrey,
    WebView: favoriteGrey
  },

  // StoryBoard
  StoryBoard: {
    Title: "#ffffff",
    Yellow: "#bec166",
    Green: "#5fb374",
    Blue: "#7eb7d1"
  },

  // Setting
  Setting: {
    PersonalCardBackground: favoriteBlack
  }
};
