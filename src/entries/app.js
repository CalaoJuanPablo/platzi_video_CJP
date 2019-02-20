import React, { Fragment } from 'react';
import { hydrate } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Videos from '../pages/containers/videos';
import Home from '../pages/components/home';
import reducer from '../reducer';
import { Map as map } from 'immutable';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../pages/components/header';

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
      <Fragment>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/videos" exact component={Videos} />
      </Fragment>
    </Provider>
  </BrowserRouter>
  , homeContainer)

