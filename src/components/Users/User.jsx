import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/coo.jpg';
import { NavLink } from 'react-router-dom';

const User = ({ user, isFollowingInProgress, follow, unfollow }) => {
    return (
        <div>
            <div>
                <NavLink to={`/profile/` + user.id}>
                    <img
                        className={s.usersPhoto}
                        src={user.photos.small != null ? user.photos.small : userPhoto}
                        alt='userPhoto' 
                    />
                </NavLink>
            </div>

            <div>
                {user.followed ?
                    <button
                        disabled={isFollowingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            unfollow(user.id)
                        }}
                    >Unfollow</button> :
                    <button
                        disabled={isFollowingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            follow(user.id);
                        }}
                    >Follow</button>}
            </div>

            <div>{user.name}</div>
            <div>{user.status}</div>
            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>
        </div>
    );
}

export default User;