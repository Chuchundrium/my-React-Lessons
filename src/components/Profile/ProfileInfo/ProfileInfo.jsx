import React from 'react';
import s from './ProfileInfo.module.css';
import Reloader from '../../common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Reloader />
    } else return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small} alt='photoSmall' />
                <ProfileStatusWithHooks
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