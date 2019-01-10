import React from 'react';
import { hydrate } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from '../pages/containers/home';
import reducer from '../reducer';
import { Map as map } from 'immutable';

const store = createStore(
  reducer,
  map(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const homeContainer = document.getElementById('home-container')

hydrate(
  <Provider store={store}>
    <Home />
  </Provider>, homeContainer)

