import * as firebase from "firebase"


const config = {
    apiKey: "AIzaSyBJLIMexTMt4GBk4-dABzrhUTtAqkXB4T8",
    authDomain: "miniquest-alpha.firebaseapp.com",
    databaseURL: "https://miniquest-alpha.firebaseio.com",
    projectId: "miniquest-alpha",
    storageBucket: "miniquest-alpha.appspot.com",
    messagingSenderId: "1398276092"
};

export default class Firebase {
    static auth;

    static init() {
        firebase.initializeApp(config);
        Firebase.auth = firebase.auth;
    }
}
