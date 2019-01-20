import React, {Component} from "react";
import {View, Text} from "react-native";
import IconButton from "../../basicComponents/IconButton";
import IconAntDesign from "react-native-vector-icons/AntDesign"
import firebase from "react-native-firebase";

class Profile extends Component {

    handleLogout = () => firebase.auth().signOut()
            .then(() => this.props.navigation.navigate("Login"))
            .catch((error) => alter(error));

    render() {
        return (
            <View>
                <Text>Max Mustermann Profil einfügen</Text>

                <IconButton
                    icon={<IconAntDesign name={"logout"} size={24} color={"white"}/>}
                    text={"logout"}
                    onPress={this.handleLogout}
                />
            </View>
        );
    }
}

export default Profile;
