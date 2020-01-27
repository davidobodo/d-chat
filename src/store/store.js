import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";

import rootSaga from "../sagas/rootSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)); //mount sagaMiddleWare on store 
sagaMiddleware.run(rootSaga);


export default store;



