import firebase from 'firebase/app';

import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.D_CHAT_apiKey,
    authDomain: process.env.D_CHAT_authDomain,
    databaseURL: process.env.D_CHAT_databaseURL,
    projectId: process.env.D_CHAT_projectId,
    storageBucket: process.env.D_CHAT_storageBucket,
    messagingSenderId: process.env.D_CHAT_messagingSenderId,
    appId: process.env.D_CHAT_appId,
    measurementId: process.env.D_CHAT_measurementId,
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase