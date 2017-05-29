/**
 * Created by 12point on 04/03/2017.
 */
import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

export default class Button extends Component {
    render() {
        let {iconName, title, onClick} = this.props;

        return(
            <TouchableOpacity
              onPress={onClick} style={styles.center }>
                {iconName ? <Icon name={iconName} size={40} color={"#fff"} /> : null}
                {title ? <Text style={{color: "#fff"}}>{title}</Text> : null}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    center: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
});
