import React from 'react';

import { useSelector, shallowEqual } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Home.css';
import Main from '../../components/main/Main'
import Sidebar from '../../components/sidebar/Sidebar';
import store from '../../store/store';
import { firestoreConnect } from 'react-redux-firebase';

const Home = () => {
    const { firebase, allUsers, receiverId } = useSelector(state => ({
        firebase: state.firebase,
        allUsers: state.firestore.ordered.users,
        receiverId: state.receiverId
    }), shallowEqual);

    if (!firebase.auth.uid) {
        return <Redirect to="/auth" />
    }

    const user = firebase.profile;
    const userId = firebase.auth.uid;
    //----------------------------------------------------------
    // previous dummy contact details:
    const { contacts, userFake } = store.getState();
    //----------------------------------------------------------


    return (
        <div className="home">
            <Sidebar contacts={allUsers} />
            <Main
                userFake={userFake}
                receiverId={receiverId}
                user={user}
                userId={userId} />
        </div>
    );
}

export default firestoreConnect(() => ['users'])(Home);