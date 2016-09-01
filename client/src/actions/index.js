import axios from 'axios';
import {browserHistory} from 'react-router';
const ROOT_URL = 'http://localhost:3000';

import {AUTH_USER, UNAUTH_USER, AUTH_ERROR} from './types';

export function signinUser({email, password}) {
    return function(dispatch){
        axios.post(`${ROOT_URL}/signin`, { email, password })
        .then(response => {
          dispatch({type: AUTH_USER});
          localStorage.setItem('token', response.data.token);
          browserHistory.push('/feature');
        })
        .catch(() => {
          dispatch(authError('Bad login'));
        });
    }
}

export function authError(error) {
    return {
      type: AUTH_ERROR,
      error: error
    }
}
