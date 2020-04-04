import { authAPI } from '../../api/api';
import { stopSubmit } from 'redux-form';

/** REDUX-ducks refactoring:
 * recommended to use extended name (to be uniq)
 * to avoid same names in different reducers (and name conflicts as a result)
 * !!! because all action creator go to all reducers 
 */
// const SET_USER_DATA = 'SET-USER-DATA';
const SET_USER_DATA = 'network/auth/SET-AUTH-USER-DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: { id, email, login, isAuth }
})

export const getAuthUserData = () => async (dispatch) => {
    const data = await authAPI.getMe();

    if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    };
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe);

    if (data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        /**stopSubmit - action creator by redux-form: */
        // let action = stopSubmit('loginForm', {email: 'Wrong email'});
        // let action = stopSubmit('loginForm', {password: 'Wrong email'});
        let message = data.messages.length > 0 ? data.messages[0] : 'Error';
        dispatch(stopSubmit('loginForm', { _error: message }));
    };
}

export const logout = () => async (dispatch) => {
    const data = authAPI.logout();

    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    };
}

export default authReduser;