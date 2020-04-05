import React from 'react';
import s from './ProfileInfo.module.css';
import Reloader from '../../common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from "../../../assets/images/coo.jpg"

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Reloader />
    }

    const onMainPhotoSelection = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    } 
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img
                    src={profile.photos.large || userPhoto}
                    alt='photoLarge'
                    className={s.mainPhoto}
                />

                {isOwner && <input
                    type={'file'}
                    onChange={onMainPhotoSelection}
                />}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}  />

                <div>
                    <span>{profile.fullName}</span> <br />
                    <span>{profile.aboutMe}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;