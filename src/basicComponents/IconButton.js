import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, ActivityIndicator} from "react-native";

const styles = StyleSheet.create({
    container: {
        elevation: 4,
        backgroundColor: '#2196F3',
        borderRadius: 2,
        width: 150,
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    iconContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        flex: 2,
        color: '#fff',
        textAlign: 'center',
        padding: 8,
        fontSize: 18,
    },

});

const IconButton = (props) => (
    <TouchableOpacity
        style={styles.container}
        onPress={props.onPress}
    >
        <View style={styles.iconContainer}>
            {props.loading ? <ActivityIndicator size="small" color="white"/> : props.icon}
        </View>

        <Text style={[styles.text, {color: props.loading ? "#ddd" : "white"}]}>
            {props.text}
        </Text>

    </TouchableOpacity>
);

export default IconButton;
