import React from 'react';
import { hydrate } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Home from '../pages/containers/home';
import reducer from '../reducer';
import { Map as map } from 'immutable';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(logger, thunk)
  )
)

const homeContainer = document.getElementById('home-container')

hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <Home />
    </Provider>
  </BrowserRouter>
  , homeContainer)

