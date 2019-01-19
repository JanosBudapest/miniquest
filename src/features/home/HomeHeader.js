import React from "react";
import {View, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        height: "15%",
        width: "95%",
        borderColor: "black",
        backgroundColor: '#c6e2ff',
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
    },

});

const HomeHeader = () => (
        <View style={styles.container}>
            <Text style={{marginLeft: "0%"}}> Meine Quests</Text>
        </View>
);

export default HomeHeader;
