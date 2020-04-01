import { createSelector } from "reselect";

/**From UsersContainer.jsx, mapStateToProps:
 * 
 * users: state.usersPage.users,
 * pageSize: state.usersPage.pageSize,
 * totalUsersCount: state.usersPage.totalUsersCount,
 * currentPage: state.usersPage.currentPage,
 * isFollowingInProgress: state.usersPage.isFollowingInProgress
 */

export const getUsers = (state) => {
    return state.usersPage.users;
};
export const getUsersSelector = (state) => {
    return getUsers(state).filter(u => true);
};
/** createSelector can depend on several selectors (primitive or not) */
/** createSelector:
 * - calls getUsers
 * - checks result of return
 * - calls inner function ONLY if getUsers return been changed */
export const getUsersSuperSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true);
})
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};
export const getIsFollowingInProgress = (state) => {
    return state.usersPage.isFollowingInProgress;
};