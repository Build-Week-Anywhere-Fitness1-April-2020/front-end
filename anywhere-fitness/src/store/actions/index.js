import axios from 'axios';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
// import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const signUpFetch = userInfo => dispatch => {
    // intial fetch state
    dispatch({ type: FETCH_START });
    // axios call to api
    axios
        .post(`https://anywherefitness-api.herokuapp.com/auth/register`, userInfo)
        .then( res => {
            // fetch request success and dispatch action
            dispatch({ type: FETCH_SUCCESS, payload: res.data.message })
        })
        .catch( error => {
            const errorObject = {error}
            const message = errorObject.error.response.data.detail
            dispatch({ type: FETCH_FAILURE, payload: message })
        })
}

// { headers: {"" : ""} }

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginFetch = userInfo => dispatch => {
    dispatch({ type: LOGIN_START });
    axios
        .post(`https://anywherefitness-api.herokuapp.com/auth/login`, userInfo)
        .then(res =>{
            // console.log(res)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
        })
        .catch( error => {
            console.log({error})
            dispatch({ type: LOGIN_FAILURE, payload: error })
        })
}

export const GET_CLASSES_START = 'GET_CLASSES_START';
export const GET_CLASSES_SUCCESS = 'GET_CLASSES_SUCCESS';
export const GET_CLASSES_FAILURE = 'GET_CLASSES_FAILURE';

export const classesFetch = token => dispatch => {
    dispatch({ type: GET_CLASSES_START })
    // console.log('token: ', token)
        axiosWithAuth(token)
            .get('classes')
            .then(res => {
                // console.log('in axios call',res.data)
                dispatch({ type: GET_CLASSES_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log({err})
            })
}