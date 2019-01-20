import React, {Component} from "react";
import {Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity} from "react-native";
import IconButton from "../../basicComponents/IconButton";
import IconMaterialUi from "react-native-vector-icons/MaterialIcons";
import firebase from "react-native-firebase";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
    },
    input: {
        borderWidth: 1,
        padding: 5,
        width: 150,
        height: 40,
    }
});

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }

    handleSignIn = () => {
        const {email, password} = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate("App"))
            .catch((error) => alert(error))
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>

                <Text>Login</Text>

                <TextInput
                    style={styles.input}
                    placeholder="email"
                    onChangeText={(value) => this.setState({email: value})}
                />

                <TextInput
                    style={styles.input}
                    placeholder="password"
                    onChangeText={(value) => this.setState({password: value})}
                />

                <IconButton
                    text={"login"}
                    icon={<IconMaterialUi name={"person"} size={26} color={"white"}/>}
                    onPress={this.handleSignIn}
                />

                <TouchableOpacity onPress={() => this.props.navigation.navigate("SignUp")}>
                    <Text>SignUp (button)</Text>
                </TouchableOpacity>

            </SafeAreaView>
        )
    }
}

export default Login;
