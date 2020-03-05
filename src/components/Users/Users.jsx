import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/coo.jpg'

const Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            });



        props.setUsers([
            {
                id: 1,
                name: 'Buba K.',
                status: 'i from Sun ...',
                location: { city: 'Hot', country: 'Sun' },
                followed: true,
                photos:
                {
                    small: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbyUfcmGYstIBdpmXM11xU94NVWDCC3GVJ8WXCP3AElydwLvWf',
                    large: ''
                }
            },
            {
                id: 2,
                name: 'Tata M.',
                status: 'i am see you ...',
                location: { city: 'Cold', country: 'Moon' },
                followed: true,
                photos:
                {
                    small: 'data:image/jpeg;base64,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',
                    large: ''
                }
            },
            {
                id: 3,
                name: 'Marry B.',
                status: 'i am nothing ...',
                location: { city: 'Red', country: 'Mars' },
                followed: false,
                photos:
                {
                    small: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAUt74B4PaODfxwTs6oGWYqlTn-CHfKhgPTcPJvFQUxKqTc3p-',
                    large: ''
                }
            },
            {
                id: 4,
                name: 'Pupa P.',
                status: 'i am forever ...',
                location: { city: 'Ye', country: 'Pluto' },
                followed: false,
                photos:
                {
                    small: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwLDdzy9R3621EkW1J7EZJ9dwiAB3SbX-y2sTgszoXKOyyD4I0',
                    large: ''
                }
            }
        ]);
    }


    return (
        <div className={s.myText}>
            {
                props.users.map(u => <div key={u.id}>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> :
                            <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </div>
                )
            }
        </div>
    )
}

export default Users;