/**From UsersContainer.jsx, mapStateToProps:
 * 
 * users: state.usersPage.users,
 * pageSize: state.usersPage.pageSize,
 * totalUsersCount: state.usersPage.totalUsersCount,
 * currentPage: state.usersPage.currentPage,
 * isFollowingInProgress: state.usersPage.isFollowingInProgress
 */

export const usersSelector = (state) => {
    return state.usersPage.users;
};
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