import { 
    LOGIN_START, 
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions'

const initialState = {
    token: '',
    success: '',
    isFetching: false,
    error: ''
};

export const loginReducer = ( state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                isFetching: true
            };
        case LOGIN_SUCCESS:
            // console.log(action.payload)
            return {
                ...state,
                isFetching: false,
                success: 'Login Success!',
                error: '',
                token: action.payload
            };
        case LOGIN_FAILURE:
            // console.log(action.payload)
            return {
                ...state,
                success: '',
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};