import React from 'react';
import s from './ProfileInfo.module.css';
import Reloader from '../../common/Preloader/Preloader'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Reloader />
    } else return (
        <div>
            <div>
                <img src='https://image.freepik.com/free-vector/_3470-14.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small} />
                <div>
                    <span>{props.profile.fullName}</span> <br/>
                    <span>{props.profile.aboutMe}</span>
                </div>
            </div>
        </div>
            )
        }
        
export default ProfileInfo;