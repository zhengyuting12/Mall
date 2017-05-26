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

import {Color} from "../colors";
import {screenWidth, screenHeight} from "../../util/system";

const WindowWidth = screenWidth();
const WindowHeight = screenHeight();

const HEAD_HEIGHT = 64;
const FOOTER_HEIGHT = 54;

function getWidth(w) {
  return w / 720 * WindowWidth
}

function getHeight(h) {
  return h / 1280 * WindowHeight
}

export const Style = {
  Width: getWidth,

  Height: getHeight,

  RCenter:{
    alignItems: "center"
  },
  CCenter:{
    justifyContent: "center"
  },
  Center: {
    justifyContent: "center",
    alignItems: "center"
  },
  Row: {
    flexDirection: "row"
  },
  Window: {
    width: WindowWidth,
    height: WindowHeight
  },
  WidthUseWindow: {
    width: WindowWidth
  },
  WidthUseWindowThree: {
    width: WindowWidth/3
  },
  Flex: {
    flex: 1
  },
  FlexColumn: {
    flex: 1,
    flexDirection: "column",
  },
  ImageFullScreen: {
    flex: 1,
    width: WindowWidth,
    height: 1
  },

  MainContent: {
    height: WindowHeight - FOOTER_HEIGHT
  },

  ShopHome: {
    height: 350,
    width: WindowWidth

  },

  // 通用配置
  Common: {
    BackContainer: {
      width: 96,
      backgroundColor: Color.transparent,
      justifyContent: "flex-start",
    },

    Back: {
      color: Color.white,
      size: 40
    },

    CloseContainer: {
      width: 96,
      backgroundColor: Color.transparent,
      justifyContent: "flex-end",
    },

    Close: {
      color: Color.white,
      size: 40
    }
  },

  // Splash
  SplashText: {
    flex: 1,
    fontSize: 16,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 10,
    backgroundColor: "transparent",
  },

  // Header
  Header: {
    height: HEAD_HEIGHT,
    backgroundColor: Color.Background.Common
  },

  HeaderTitle: {
    fontSize: 20,
    color: Color.white
  },

  // Tab
  Tab: {
    height: FOOTER_HEIGHT,
    backgroundColor: Color.Background.Common
  },

  TabIcon: {
    size: 28,
    normal: Color.iconGrey,
    focused: Color.red
  },

  TabTitle: {
    color: Color.iconGrey,
    fontSize: 12
  },

  TabTitleFocused: {
    color: Color.red,
    fontSize: 12
  },

  // WebView
  WebView: {
    height: WindowHeight - HEAD_HEIGHT
  },

  //ShopHome
  ShopHomeTab: {
    height: 60,
    backgroundColor: Color.white,
    borderColor: Color.white
  },

  //Personal
  LoginButton: {
    height: 80,
    width: 80,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
    marginLeft: WindowWidth / 2 - 60
  },

  itemStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',

  }
};
