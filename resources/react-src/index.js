import {createStore} from "redux";
import {Provider} from "react-redux";
import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import App from './app.jsx';
import store from "./store/store";

console.log(document.getElementById('crm'));

ReactDOM.render(
    // <Provider store={store}>
    <App/>,
    // </Provider>,
    document.getElementById('crm')
);
