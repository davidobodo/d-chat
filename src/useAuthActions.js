import firebase from "firebase/app";
import React, { useState } from "react";
import { db } from "./fbConfig";

export const useAuthActions = () => {
    const [user, setUser] = useState(null);
    const signUp = (details) => {
        console.log(details)
        // return (firebase.auth()
        //     .createUserWithEmailAndPassword(details)
        //     .then(res => {
        //         setUser(res.user);
        //         return db.collection("users").add({
        //             user
        //         })
        //             .then(function (docRef) {
        //                 console.log("Document written with ID: ", docRef.id);
        //             })
        //             .catch(function (error) {
        //                 console.error("Error adding document: ", error);
        //             });
        //     }))
    }

    return {
        signUp,
    }
}