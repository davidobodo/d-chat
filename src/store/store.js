import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import rootSaga from "../sagas/rootSaga";
import createSagaMiddleware from "redux-saga";
const reduxExtension = require('redux-devtools-extension');

const sagaMiddleware = createSagaMiddleware();
const allMiddlewares = middleware => { //dont mind my naming
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = reduxExtension;
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}


const store = createStore(rootReducer, allMiddlewares([sagaMiddleware])); //mount sagaMiddleWare on store 
sagaMiddleware.run(rootSaga);

export default store;



