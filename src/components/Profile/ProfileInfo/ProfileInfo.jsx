import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://image.freepik.com/free-vector/_3470-14.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                avatar + description
    </div>
        </div>
    )
}

export default ProfileInfo;