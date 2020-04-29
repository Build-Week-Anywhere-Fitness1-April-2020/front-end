import { combineReducers } from 'redux';
import { signUpReducer as signUp } from './SignUpReducer';
import { loginReducer as login } from './loginReducer';
import { classesReducer as classes } from './classesReducer'

export default combineReducers( { signUp, login, classes } );