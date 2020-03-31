import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: { id, email, login, isAuth }
})

export const getAuthUserData = () => (dispatch) => {
    return authAPI.getMe()
        .then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(data => { 
            if (data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                /**stopSubmit - action creator by redux-form: */
                // let action = stopSubmit('loginForm', {email: 'Wrong email'});
                // let action = stopSubmit('loginForm', {password: 'Wrong email'});
                let message = data.messages.length > 0 ? data.messages[0] : 'Error';
                dispatch(stopSubmit('loginForm', {_error: message}));
            }
        });
}

export const logout = () => (dispatch) => {
    authAPI.logout()
    .then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    })
}

export default authReduser;