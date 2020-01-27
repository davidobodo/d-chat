import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import React, { useContext, createContext } from "react";
import { useAuthActions } from "./useAuthActions";

firebase.initializeApp({
    apiKey: "AIzaSyDJvfZwGAnPFMrbJVtKNMsyL1_DZpVONes",
    authDomain: "skypey-c0b94.firebaseapp.com",
    databaseURL: "https://skypey-c0b94.firebaseio.com",
    projectId: "skypey-c0b94",
    storageBucket: "skypey-c0b94.appspot.com",
    messagingSenderId: "418462843045",
    appId: "1:418462843045:web:2b676b6574f95695fdcd4c",
    measurementId: "G-1F35J5810H"
});
// firebase.analytics();

export const db = firebase.firestore()

const authContext = createContext();
export const useAuth = () => useContext(authContext)
export const ProvideAuth = ({ children }) => {
    const auth = useAuthActions(); // the function holding all my auth actions;
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}