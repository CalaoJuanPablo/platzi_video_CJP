import React, { Fragment } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Videos from './videos';
import Home from '../components/home';
import reducer from '../../reducer';
import { Map as map } from 'immutable';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/header';
import Contacto from '../../contacto/components/contacto';
import Perfil from '../../perfil/components/Perfil';
import NotFound from '../../NotFound/components/NotFound';

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(logger, thunk)
  )
)
const App = props =>
  <Provider store={store}>
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/videos" exact component={Videos} />
        <Redirect from="/v" to="/videos" />
        <Route path="/contacto" exact component={Contacto} />
        <Route path="/perfil" exact component={Perfil} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  </Provider>;

export default App;