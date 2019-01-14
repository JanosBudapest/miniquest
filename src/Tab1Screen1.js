import React, {Component} from "react";
import {View, Text, Button} from "react-native";

const Tab1Screen1 = (props) => (
    <View style={{borderColor: "black", borderWidth: 1, flex: 1}}>

        <View style={{flex: 1, borderColor: "black", borderWidth: 1}}>

            <View style={{
                height: "50%",
                width: "50%",
                borderColor: "black",
                borderWidth: 1,
                alignItems: "center",
                justifyContent: "center",

            }}>
                <Text style={{marginLeft: "20%"}}> hahahahaa Was passiert, wenn ich auf den blauen Knopf drücke?</Text>
            </View>

        </View>
        <Text>Was passiert, wenn ich auf den blauen Knopf drücke?</Text>
        <Button title={"zu 1/2"} onPress={() => {
            props.navigation.navigate("Tab1Screen2")
        }}/>
    </View>
);

export default Tab1Screen1;
