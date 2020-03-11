import React from 'react';
import s from './ProfileInfo.module.css';
import Reloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Reloader />
    } else return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small} alt='photoSmall' />
                <ProfileStatus
                    status={props.status}
                    updateStatus={props.updateStatus}
                />

                <div>
                    <span>{props.profile.fullName}</span> <br />
                    <span>{props.profile.aboutMe}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;