import { combineReducers } from 'redux';
import generatePasswordReducer from './generate-password-reducer';


export default combineReducers({
    password: generatePasswordReducer
});
