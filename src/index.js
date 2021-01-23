import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux';
import allReducers from './reducers'

import {Provider} from 'react-redux';
import ProtectedRoute from './ProtectedRoute';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from './Login';


const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  function Index() {
    return(
    <Provider store={store}>
      <Switch>
          <Route exact path="/" component={LoginPage} />
          <ProtectedRoute exact path="/app" component={App} />
          <Route exact path="*" component={() => "404 NOT FOUND"} />
        </Switch>
    </Provider>)
  };


const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Index />
  </BrowserRouter>,
  rootElement
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
