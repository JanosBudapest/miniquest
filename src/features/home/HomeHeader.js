import React from "react";
import {View, Text, StyleSheet,TextInput} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
    container: {
        height: "15%",
        width: "95%",
        borderColor: "black",
        backgroundColor: '#c6e2ff',
        borderWidth: 1,
        alignItems: "stretch",
        justifyContent: "center",
        borderRadius: 25,
    },

});

const HomeHeader = () => (  
        <View style={styles.container}>
            <View style={{height:80, backgroundColor:"white", borderBottomWidth:1,borderBottomColor:"#ddddd"}}>
                <View style={{
                    flexDirection:"row", 
                    padding:20, 
                    backgroundColor:"white", 
                    marginHorizontal:10, 
                    shadowOffset:{width:0,height:0},
                    shadowColor: "black",
                    shadowOpacity: 0.2,
                    elevation:1
                    }}>
                    <Icon name="search" size={24} />
                    <TextInput 
                        underlineColorAndroid="transparent"
                        placeholder="Search Me"
                        placeholderTextColor="white"
                        style={{flex:2, height:50, width:300, fontWeight:"700", backgroundColor:"#d3d3d3"}}
                    />
                </View>

            </View>
        </View>
);

export default HomeHeader;
