import { usersAPI } from '../../api/api';
import { updateObjectInArray } from './../../utils/object-helpers';

const FOLLOW = 'network/users/FOLLOW';
const UNFOLLOW = 'network/users/UNFOLLOW';
const SET_USERS = 'network/users/SET-USERS';
const SET_CURRENT_PAGE = 'network/users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'network/users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'network/users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'network/users/TOGGLE-IS-FOLLOWING-IN-PROGRESS';

let initialState = {
    users: [],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(
                    state.users,
                    action.userId,
                    "id",
                    {followed: true}),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(
                    state.users,
                    action.userId,
                    "id",
                    {followed: false}),
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching

            }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                isFollowingInProgress: action.isFollowingInProgress ?
                    [...state.isFollowingInProgress, action.userId] :
                    state.isFollowingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (newCurrentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage: newCurrentPage
});

export const setTotalUsersCount = (totalCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalCount
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});

export const toggleIsFollowingInProgress = (isFollowingInProgress, userId) => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isFollowingInProgress,
    userId
});

/** getUsers and currentPage are renamed to requestUsers and page in lesson 81 */
export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        const data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingInProgress(true, userId));
    const data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    };
    dispatch(toggleIsFollowingInProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(
            dispatch,
            userId,
            usersAPI.followUser.bind(usersAPI),
            followAC);
    };
};

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(
            dispatch,
            userId,
            usersAPI.unfollowUser.bind(usersAPI),
            unfollowAC);
    }
};

export default usersReducer;