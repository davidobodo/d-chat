import React from 'react';

import { useSelector, shallowEqual } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Home.css';
import Main from '../../components/main/Main'
import Sidebar from '../../components/sidebar/Sidebar';
import store from '../../store/store';
import { firestoreConnect } from 'react-redux-firebase';

const Home = () => {
    const {
        firebase,
        allUsers
    } = useSelector(state => ({
        firebase: state.firebase,
        allUsers: state.firestore.ordered.users,
    }), shallowEqual);

    if (!firebase.auth.uid) {
        return <Redirect to="/auth" />
    }

    const currentUser = firebase.profile;

    //----------------------------------------------------------
    // previous dummy contact details:
    const { contacts, user, activeUserId } = store.getState();
    //----------------------------------------------------------



    return (
        //use lodash to convert contacts from objects to array
        <div className="home">
            <Sidebar contacts={allUsers} />
            <Main
                user={user}
                activeUserId={activeUserId}
                currentUser={currentUser} />
        </div>
    );
}

export default firestoreConnect(() => ['users'])(Home);