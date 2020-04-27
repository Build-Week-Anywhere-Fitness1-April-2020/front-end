import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const signUpFetch = () => dispatch => {
    // intial fetch state
    dispatch({ type: FETCH_START });
    // axios call to api
    axios
        .get(``, { headers: {"" : ""} })
        .then( res => {
            // fetch request success and dispatch action
            console.log(res)
            dispatch({ type: FETCH_SUCCESS, payload: res })
        })
        .catch( error => {
            // console.log('error: ', error) dispatch err
            dispatch({ type: FETCH_FAILURE, payload: error })
        })
}