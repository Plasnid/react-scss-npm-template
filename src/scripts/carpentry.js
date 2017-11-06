import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//we will have to move app before we do this
//import App from './components/App';
import Main from './components/Main';
import Gallery from './components/Gallery';

import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';

//examine store before you use the next line
import store, { history } from './store';

//raven and sentry are below... not sure if we need them yet
//will be used to handle error logging
//import Raven from 'raven-js';
//import {sentry_url} from './data/config';
//Raven.config(sentry_url).install();

//lets add in our style
import style from '../styles/main.scss';
import Root from './components/Root';

//The root now contains the router
ReactDOM.render(
  <Root store={store} history={history}/>,
  document.getElementById('root')
)
