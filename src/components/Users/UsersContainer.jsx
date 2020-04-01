import { connect } from 'react-redux';
import {
    follow,
    unfollow,
    setCurrentPage,
    getUsers
} from '../../redux/reducers/users-reducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { 
    getUsersSuperSelector,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getIsFollowingInProgress
} from './../../redux/selectors/users-selectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader />}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    onPageChanged={this.onPageChanged}
                    isFollowingInProgress={this.props.isFollowingInProgress}
                />
            </>
        )
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFollowingInProgress: state.usersPage.isFollowingInProgress
//     }
// }
let mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers}),
)(UsersContainer);