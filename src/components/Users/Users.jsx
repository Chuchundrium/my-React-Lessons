import React from 'react';
import s from './Users.module.css';
import Pagination from '../common/Pagination/Pagination';
import User from './User';

const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, ...props }) => {
    return (
        <div className={s.myText}>
            <Pagination
                currentPage={currentPage}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
            />

            {props.users.map(u =>
                <User
                    user={u}
                    key={u.id}
                    isFollowingInProgress={props.isFollowingInProgress}
                    follow={props.follow}
                    unfollow={props.unfollow}
                />
            )}
        </div>
    )
}

export default Users;