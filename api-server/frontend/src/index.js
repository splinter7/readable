import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import postsReducer from "./reducer";
import './css/index.css';
import App from './components/App';
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';

const middleWare = compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
var store = createStore(postsReducer, middleWare);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
