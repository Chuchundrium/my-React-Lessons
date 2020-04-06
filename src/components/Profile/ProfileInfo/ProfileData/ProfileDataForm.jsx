import React from 'react';
import { reduxForm } from 'redux-form';
import s from './../ProfileInfo.module.css';
import { createField, Input, Textarea } from '../../../common/FormsControls/formsControls';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <b>Full name: </b>
                {createField('fullName', Input, 'Full name', [])}
            </div>
            <div>
                {createField('lookingForAJob', Input, '', [], {type: 'checkbox'})}
                <b> Looking for a job</b>
            </div>
            <div>
                <b>My skills: </b>
                {createField('LookingForAJobDescription', Textarea, 'React Redux etc.', [])}
            </div>
            <div>
                <b>About me: </b>
                {createField('aboutMe', Textarea, 'a lot of words', [])}
            </div>
            <div>
                <b>Contacts: </b>{Object.keys(profile.contacts).map(key => {
                    return (
                    <div className={s.contact} key={key}>
                        <b>{key}: </b>
                        {createField('contacts.' + key, Input, '', [])}
                    </div>)
                })}
            </div>
            {error &&
                <div className={s.formSummaryError}>
                    {error}
                </div>}
            <button>Save</button>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({
    /* form's unique name: */
    form: 'profileEditForm'
})(ProfileDataForm);

export default ProfileDataReduxForm;