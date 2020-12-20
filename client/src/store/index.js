import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import * as AuthenticationReducer from './reducers/Authentication';
import config from '../config';
import history from './History';

const reducers = {
  user: AuthenticationReducer.reducer,
}

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  ...reducers,
})

const composeEnhancers = (config.environment !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const logger = createLogger({predicate: () => config.environment === 'development' });

const middlewares = [routerMiddleware(history), thunk];

if (config.environment !== 'production') {
  middlewares.push(logger);
}

const Store = createStore(
  rootReducer(history),
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
)

function storeRegistration([name, obj]) {
  if (typeof obj.registerStore === 'function') {
    obj.registerStore(Store);
    console.info('Registered Store with module', name);
  }
}

Object.entries({
  AuthenticationReducer
}).forEach(storeRegistration);

export default Store;

export {rootReducer};