import {createStore} from "redux";
import {Provider} from "react-redux";
import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import App from './app.jsx';
import Demo from './demo.jsx';
import ProfitPage from './profit-page.jsx';
import store from "./store/store";


if (Array.from(document.querySelectorAll('#trade')).length > 0) {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('trade')
    );
} else if (Array.from(document.querySelectorAll('#demo')).length > 0) {
    ReactDOM.render(
        <Provider store={store}>
            <Demo/>
        </Provider>,
        document.getElementById('demo')
    );
} else if (Array.from(document.querySelectorAll('#profitPage')).length > 0) {
    ReactDOM.render(
        <Provider store={store}>
            <ProfitPage/>
        </Provider>,
        document.getElementById('profitPage')
    );
}


