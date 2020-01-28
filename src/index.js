import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import store from './store/store';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';

const fbConfig = {
    apiKey: "AIzaSyAwuajOuBV1dZQOnDUVziiQwjwhBCfXndc",
    authDomain: "d-chat-98abe.firebaseapp.com",
    databaseURL: "https://d-chat-98abe.firebaseio.com",
    projectId: "d-chat-98abe",
    storageBucket: "d-chat-98abe.appspot.com",
    messagingSenderId: "441517185856",
    appId: "1:441517185856:web:27deb6a5591c7403bd78a5",
    measurementId: "G-TH6YGMVDT4"
};

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
};

firebase.initializeApp(fbConfig);
firebase.firestore();

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
}

const Root = (
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>
)



ReactDOM.render(Root, document.getElementById('root'));
serviceWorker.unregister();
