import dateFns from 'date-fns';
import {
  AUTHENTICATION_LOGIN,
  AUTHENTICATION_REGISTRATION
} from '../constants';
import AuthenticationService from '../../services/AuthenticationService';

export const userLogin = ({
  email, 
  password,
}) => {
  return (dispatch) => {
    const body = {
      email, 
      password,
    }
    return AuthenticationService.login(body)
      .then(resp => {
        dispatch({
          type: AUTHENTICATION_LOGIN,
          payload: {
            time: dateFns(),
            data: resp.data,
          }
        })
      })
  }
}

export const userRegistration = ({
  email, 
  password,
}) => {
  return (dispatch) => {
    const body = {
      email, 
      password,
    }
    return AuthenticationService.register(body)
      .then(resp => {
        dispatch({
          type: AUTHENTICATION_REGISTRATION,
          payload: {
            time: dateFns(),
            data: resp.data,
          }
        })
      })
  }
}