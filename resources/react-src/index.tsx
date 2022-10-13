import {createRoot} from 'react-dom/client';
import React from "react";
import {App} from "./App";

const container = document.getElementById('crm');
const root = createRoot(container);
root.render(<App string={123}/>);


// import ReactDOM from "react-dom";
// import {Provider} from "react-redux";
// import store from "./store/store";
// import {createStore} from "redux";
// import ReactDOM from 'react-dom';
// import React, {Component} from 'react';
// import App from './app.tsx';

//
// console.log(document.getElementById('crm'));
//
// ReactDOM.render(
//     // <Provider store={store}>
//     <App />,
//     // </Provider>,
//     document.getElementById('crm')
// );
