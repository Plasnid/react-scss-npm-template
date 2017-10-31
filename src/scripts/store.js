import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//now we import the reducer for our routing
import rootReducer from './reducers/index';

//set up a blank object to hold the state for our store
const defaultState = {};

//this has to do with debug tools connection
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

//creating our store with a combination of our reducers, a state object and debug connection
const store = createStore(rootReducer, defaultState, enhancers);

//connecting our browser history with the store
export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot){
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
