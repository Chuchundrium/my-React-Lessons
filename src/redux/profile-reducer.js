import { profileAPI } from '../api/api';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'Ho-ho-ho', likes: 5, dislikes: 7 },
        { id: 2, message: 'Ta-ta-ta-ta-ta', likes: 11, dislikes: 9 }
    ],
    newPostText: 'cha-cha-cha',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts,
                { id: state.posts.length + 1, message: state.newPostText, likes: 0, dislikes: 0 }],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
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
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});
const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
};
const setUserStatus = (status) => ({
    type: SET_USER_STATUS,
    status
});
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId)
    .then(response => {
        dispatch(setUserStatus(response.data));
    })
};
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
    .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
        
    })
}

export default profileReducer;