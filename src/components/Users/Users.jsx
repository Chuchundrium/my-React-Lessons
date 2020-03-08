import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/coo.jpg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.myText}>
            <div>
                {pages.map(p => {
                    return (
                        <span id={s.pageNumber} className={(p == props.currentPage) && s.selectedPage}
                            onClick={(e) => { props.onPageChanged(p) }}
                        >{p}</span>
                    )
                })
                }
            </div>
            {props.users.map(u => <div key={u.id}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img className={s.usersPhoto}
                            src={u.photos.small != null ? u.photos.small : userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {u.followed ?
                        <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "061e6565-ddf3-40e0-b7ce-8c2b5f934a93"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollow(u.id)
                                    }
                                })

                        }}>Unfollow</button> :
                        <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "061e6565-ddf3-40e0-b7ce-8c2b5f934a93"
                                }
                            })
                                .then(response => { 
                                    if (response.data.resultCode == 0) {
                                        props.follow(u.id)
                                    }
                                })
                        }}>Follow</button>}
                </div>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </div>
            )}
        </div>
    )
}

export default Users;
