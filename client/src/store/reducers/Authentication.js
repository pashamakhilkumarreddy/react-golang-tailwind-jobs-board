import dateFns from 'date-fns';
import {buildReducer} from './ActionHandler';
import {
  AUTHENTICATION_LOGIN,
  AUTHENTICATION_REGISTRATION
} from '../constants';

let Store = null;
export const registerStore = (store) => {
  Store = store;
}

const initialState = {
  tokens: {},
  authenticated: true,
  user: {},
};

const actionHandlers = [];

const {
  addAction,
  rootReducer,
} = buildReducer(
  initialState, 
  actionHandlers
)

export const reducer = rootReducer;

addAction(AUTHENTICATION_LOGIN, (action, state, payload) => {
  return Object.assign({}, state, {user: payload.user})
}) 

addAction(AUTHENTICATION_REGISTRATION, (action, state, payload) => {
  return Object.assign({}, state, {user: payload.user})
}) 

