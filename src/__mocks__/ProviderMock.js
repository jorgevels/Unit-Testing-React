// Este mock nos permite trabajar con redux
// y para esto debemos crear un mock del provider
// que maneje un estado inicial y todo lo que maneja la applicacion
// y de esta forma podemos hacer pruebas de los demas compomentes

import React from 'react';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import initialState from '../initialState';
import reducer from '../reducers';

const store = createStore(reducer, initialState);
const history = createBrowserHistory();

const ProviderMock = props => (
  <Provider store={store}>
    <Router history={history}>{props.children}</Router>
  </Provider>
);

export default ProviderMock;
