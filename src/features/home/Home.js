import React from "react";
import {View, Text, StyleSheet} from "react-native";
import IconButton from "../../basicComponents/IconButton";
import IconMaterialUi from "react-native-vector-icons/MaterialIcons";
import HomeHeader from "./HomeHeader";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between"
    },
});

const Home = (props) => (
    <View style={styles.container}>

        <HomeHeader/>

        <Text>Was passiert, wenn ich auf den blauen Knopf drücke?</Text>

        <IconButton
            icon={<IconFontAwesome name={"briefcase"} size={24} color={"white"}/>}
            text={"Quest"}
            onPress={() => props.navigation.navigate("Tab1Screen2")}
            loading={false}
        />

    </View>
);

export default Home;
