import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/message';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { required, maxLengthCreator } from './../../utils/validators'
import { Textarea } from './../common/FormsControls/formsControls';

const Dialogs = (props) => {
    let dialogsElements = props.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id} />
        );
    let messageElements = props.messages
        .map(m => <Message key={m.id} content={m.message} />
        );
    let addNewMsg = (values) => {
        props.sendMsg(values.newMsgBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
            </div>
            <AddMsgReduxForm onSubmit={addNewMsg} />
        </div>
    )
}


const maxLength50 = maxLengthCreator(50);
const AddMsgForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field 
                component={Textarea}
                name="newMsgBody"
                placeholder='Enter your message ...'
                validate={[required, maxLength50]}
            />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
    )
}

const AddMsgReduxForm = reduxForm({
    /* form's unique name: */
    form: 'addMsgForm'
})(AddMsgForm);

export default Dialogs;