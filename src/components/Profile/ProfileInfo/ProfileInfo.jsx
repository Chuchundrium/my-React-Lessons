import React from 'react';
import s from './ProfileInfo.module.css';
import Reloader from '../../common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Reloader />
    } else return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.small} alt='photoSmall' />
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />

                <div>
                    <span>{profile.fullName}</span> <br />
                    <span>{profile.aboutMe}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;