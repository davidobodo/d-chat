import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from './store/store'


//so that render can be passed into subscribe method
ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
