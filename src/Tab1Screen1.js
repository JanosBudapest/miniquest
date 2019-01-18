import React, {Component} from "react";
import {View, Text, Button} from "react-native";

const Tab1Screen1 = (props) => (
    <View style={{borderColor: "black", borderWidth: 1, flex: 1}}>

        <View style={{flex: 1, borderColor: "black", borderWidth: 1}}>

            <View style={{
                height: "15%",
                width: "95%",
                borderColor: "black",
                backgroundColor:'#c6e2ff',
                borderWidth: 1,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,

            }}>
                <Text style={{marginLeft: "0%"}}> Meine Quests</Text>
            </View>

        </View>
        <Text>Was passiert, wenn ich auf den blauen Knopf drücke?</Text>
        <Button title={"+ Quest"} onPress={() => {
            props.navigation.navigate("Tab1Screen2")
            
        }}/>
    </View>
);

export default Tab1Screen1;
