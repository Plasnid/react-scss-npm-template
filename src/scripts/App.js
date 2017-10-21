import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import style from '../styles/main.scss';

import Main from './components/Main';
ReactDOM.render(<Main />, document.getElementById('root'));
