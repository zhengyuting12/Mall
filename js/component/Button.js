//todo:版权
/**
 * Created by 12point on 04/03/2017.
 */
import React, {Component} from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import {Colors, Styles} from "../resource"

export default class Button extends Component {
  render() {
    let {iconName, title, onClick, Opacity} = this.props;

    return (
      <View style={[styles.buttonStyle, {backgroundColor: Opacity ? Colors.MainColor : Colors.classifyGrey }]}>
        <TouchableOpacity
          activeOpacity={Number(!Opacity)}
          onPress={onClick}
          style={[styles.center]}>
          {iconName ? <Icon name={iconName} size={40} color={"#fff"}/> : null}
          {title ? <Text style={{color: "#fff"}}>{title}</Text> : null}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },

  buttonStyle: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 20,
    height: 40,
    width: Styles.Width(720) - 60
  }
});
