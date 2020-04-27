import { combineReducers } from 'redux';
import { signUpReducer as SignUp } from './SignUpReducer';

export default combineReducers( { SignUp } )