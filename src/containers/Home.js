import React from 'react';

import { useSelector, shallowEqual } from 'react-redux';

import './Home.css';
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import store from '../store/store'
import _ from 'lodash'

const Home = () => {
    //gets state property names and values

    const {

        state,
    } = useSelector(state => ({

        state: state,
    }), shallowEqual);

    console.log(state)

    const { contacts, user, activeUserId } = store.getState();
    return (
        //pass the state values as props into our two components
        //use lodash to convert contacts from objects to array
        <div className="home">
            <Sidebar contacts={_.values(contacts)} />
            <Main user={user} activeUserId={activeUserId} />
        </div>
    );
}

export default Home;