import { authAPI } from '../api/api';

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
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

const setAuthUserData = (id, email, login) => ({
    type: SET_AUTH_USER_DATA,
    data: {id, email, login}
})

export const getAuthUserData = () => (dispatch) => {
    authAPI.getMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
}

export default authReduser;