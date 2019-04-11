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

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk))


// Renders the BrowserRouter component that takes care of browser side routing
//  hooks into the same div (of id "root")
ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                {renderRoutes(Routes)}
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'))