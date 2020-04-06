import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/coo.jpg';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataReduxForm from './ProfileData/ProfileDataForm';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) { return <Preloader /> }

    const onMainPhotoSelection = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };
    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        });
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
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                {editMode
                    ? <ProfileDataReduxForm 
                    profile={profile} initialValues={profile} isOwner={isOwner} onSubmit={onSubmit} />
                    : <ProfileData 
                    profile={profile} isOwner={isOwner} goToEditMode={() => {setEditMode(true)}}/>
                }
            </div>
        </div>
    )
}

export default ProfileInfo;