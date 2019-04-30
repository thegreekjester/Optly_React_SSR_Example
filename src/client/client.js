// Startup point for the client side application

//import necessary libraries
import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import {renderRoutes} from 'react-router-config'
import { OptimizelyProvider } from '@optimizely/react-sdk';
import * as optimizely from '@optimizely/js-web-sdk'

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk))

// This is the store that is passed by the server
let storeJSON = store.getState();

// HAVE to initiate a new client on the front end to ensure the onReady function is available
const client = optimizely.createInstance({
    datafile:storeJSON.bucketing.datafile
})
// Renders the BrowserRouter component that takes care of browser side routing
//  hooks into the same div (of id "root")
ReactDOM.hydrate(
    <OptimizelyProvider optimizely={client} userId={storeJSON.bucketing.userID}>
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    {renderRoutes(Routes)}
                </div>
            </BrowserRouter>
        </Provider>
    </OptimizelyProvider>
    , document.getElementById('root'))