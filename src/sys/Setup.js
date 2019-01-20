import React, {Component} from "react";
import AppContainer from "./AppContainer";
// import Firebase from "./Firebase"
// import * as firebase from "firebase"

// const firebaseconfig = {
//     apiKey: "AIzaSyBJLIMexTMt4GBk4-dABzrhUTtAqkXB4T8",
//     authDomain: "miniquest-alpha.firebaseapp.com",
//     databaseURL: "https://miniquest-alpha.firebaseio.com",
//     projectId: "miniquest-alpha",
//     storageBucket: "miniquest-alpha.appspot.com",
//     messagingSenderId: "1398276092"
// };


export default class Setup extends Component{

    componentWillMount() {
        firebase.initializeApp(firebaseconfig);
    }

    render () {
        return <AppContainer/>
    }
};
