import React from 'react';

import { useSelector, shallowEqual } from 'react-redux';

import './Home.css';
import Main from '../components/Main'
import Sidebar from '../components/Sidebar';
import store from '../store/store';
import _ from 'lodash';
import { firestoreConnect } from 'react-redux-firebase';

const Home = () => {
    const {
        currentUser,
        allUsers
    } = useSelector(state => ({
        currentUser: state.firebase.profile,
        allUsers: state.firestore.ordered.users,
    }), shallowEqual);

    console.log(allUsers)

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