import React, {Component} from "react";
import {Text, StyleSheet, TextInput, SafeAreaView} from "react-native";
import IconButton from "../../basicComponents/IconButton";
import IconMaterialUi from "react-native-vector-icons/MaterialIcons";
// import Firebase from "../../sys/Firebase";
import "@firebase/firestore"
import * as firebase from "firebase";


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

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }

    handleSignUp = async () => {
        console.log("handleSignUp", this.state);
        const {email, password} = this.state;

        firebase.auth.createUserWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate("App"))
            .catch((error) =>console.log(error));
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

                <IconButton
                    text={"submit"}
                    icon={<IconMaterialUi name={"person"} size={26} color={"white"}/>}
                    onPress={this.handleSignUp}
                />

            </SafeAreaView>
        )
    }
}

export default SignUp;
