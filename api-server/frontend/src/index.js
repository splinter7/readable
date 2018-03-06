import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import * as reducers from "./reducer";
import './css/index.css';
import App from './App';
import thunk from 'redux-thunk'
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

const middleWare = compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const rootReducer = combineReducers(reducers)
const store = createStore(rootReducer, middleWare);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter><App /></BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
