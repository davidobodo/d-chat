import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store/store';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

import ReduxSagaFirebase from 'redux-saga-firebase';

const fbConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
};

const firebaseApp = firebase.initializeApp(fbConfig);


const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
};

export const rsf = new ReduxSagaFirebase(firebaseApp)
export var firestore = firebase.firestore();

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
