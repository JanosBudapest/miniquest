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
        width: 180,
        height: 50,
        borderRadius: 10,
    }
});

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            address: "",
        }
    }

    handleSignUp = () => {
        const {email, password} = this.state;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate("App"))
            .catch((error) => console.log(error));
    };

    render () {
        return (
            <SafeAreaView style={styles.container}>

                <Text>SignUp</Text>

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

                <TextInput
                    style={styles.input}
                    placeholder="address"
                    onChangeText={(value) => this.setState({address: value})}
                />

                <IconButton
                    text={"submit"}
                    icon={<IconMaterialUi name={"person"} size={26} color={"white"}/>}
                    onPress={this.handleSignUp}
                />

                <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                    <Text>Login (button)</Text>
                </TouchableOpacity>

            </SafeAreaView>
        )
    }
}

export default SignUp;
