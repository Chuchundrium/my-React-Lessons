import { authAPI, securityAPI } from '../../api/api';
import { stopSubmit } from 'redux-form';

/** REDUX-ducks refactoring:
 * recommended to use extended name (to be uniq)
 * to avoid same names in different reducers (and name conflicts as a result)
 * !!! because all action creator go to all reducers 
 */
// const SET_USER_DATA = 'SET-USER-DATA';
const SET_USER_DATA = 'network/auth/SET-AUTH-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'network/auth/GET-CAPTCHA-URL-SUCCESS';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};
const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: { id, email, login, isAuth }
});
const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
})

export const getAuthUserData = () => async (dispatch) => {
    const data = await authAPI.getMe();
    if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    };
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);
    switch(data.resultCode) {
        case 0: {
            dispatch(getAuthUserData());
            break;
        };
        case 10: {
            dispatch(getCaptchaUrl());
            break;
        };
        default: {
            const message = data.messages.length > 0 ? data.messages[0] : 'Error';
            dispatch(stopSubmit('loginForm', { _error: message }));
        }
    }
    // if (data.resultCode === 0) {
    //     /** if success --> get auth data */
    //     dispatch(getAuthUserData());
    // } else {
    //     /**stopSubmit - action creator by redux-form: */
    //     // let action = stopSubmit('loginForm', {email: 'Wrong email'});
    //     // let action = stopSubmit('loginForm', {password: 'Wrong email'});
    //     const message = data.messages.length > 0 ? data.messages[0] : 'Error';
    //     dispatch(stopSubmit('loginForm', { _error: message }));
    // };
}
export const logout = () => async (dispatch) => {
    const data = authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    };
}
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}
export default authReduser;