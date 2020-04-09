import { profileAPI } from '../../api/api';
import { stopSubmit } from 'redux-form';

const ADD_POST = 'network/profile/ADD-POST';
const DELETE_POST = 'network/profile/DELETE-POST';
const SET_USER_PROFILE = 'network/profile/SET-USER-PROFILE';
const SET_USER_STATUS = 'network/profile/SET-USER-STATUS';
const SAVE_PHOTO_SUCCESS = 'network/profile/SAVE-PHOTO-SUCCESS';

let initialState = {
    posts: [
        { id: 1, message: 'Ho-ho-ho', likes: 5, dislikes: 7 },
        { id: 2, message: 'Ta-ta-ta-ta-ta', likes: 11, dislikes: 9 }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts,
                { id: state.posts.length + 1, message: action.newPostText, likes: 0, dislikes: 0 }],
                newPostText: ''
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            };
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({
    type: ADD_POST,
    newPostText
});
export const deletePost = (id) => ({
    type: DELETE_POST,
    id
});
const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});
export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};
export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
})
const setUserStatus = (status) => ({
    type: SET_USER_STATUS,
    status
});
export const getUserStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(response.data));

};
export const updateStatus = (status) => async (dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        };
    }
    catch(error) {
        /** error can be dispatched here
         * or smth else
         */
    }
};
export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    };
};
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        /** 97 (for display concrete error):
         * see error text: 'Invalid url format (Contacts->Facebook)'
         * string should be parsed,
         * text after 'Contacts->' should be taken 
         * and put instead of 'facebook' string:
         */
        // dispatch(stopSubmit('profileEditForm', {"contacts": {"facebook": response.data.messages[0]}}));
        /** 97. One text for all errors: */
        dispatch(stopSubmit('profileEditForm', { _error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;