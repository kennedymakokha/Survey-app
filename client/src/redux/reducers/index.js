import { combineReducers } from 'redux';
import { userSigninReducer, userRegisterReducer } from './userReducers';
import categoryReducer from './categories'
import questionReducer from './questions'
import responseReducer from './response'

export default combineReducers({
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    categoryData: categoryReducer,
    questionData: questionReducer,
    responseData: responseReducer
});