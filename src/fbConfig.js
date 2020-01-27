import firebase from 'firebase/app';

import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAwuajOuBV1dZQOnDUVziiQwjwhBCfXndc",
    authDomain: "d-chat-98abe.firebaseapp.com",
    databaseURL: "https://d-chat-98abe.firebaseio.com",
    projectId: "d-chat-98abe",
    storageBucket: "d-chat-98abe.appspot.com",
    messagingSenderId: "441517185856",
    appId: "1:441517185856:web:27deb6a5591c7403bd78a5",
    measurementId: "G-TH6YGMVDT4"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase