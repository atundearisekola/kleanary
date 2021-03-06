/**
 * @format
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {giveMeStore} from './src/store/Store';
const appRoot =()=>(
    <Provider store={giveMeStore()}>
        <App />
        </Provider>
)
AppRegistry.registerComponent(appName, () => appRoot);
