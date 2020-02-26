import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/message';
import { updateNewMsgBodyActionCreator, sendMsgActionCreator } from '../../redux/state';

const Dialogs = (props) => {

    let state = props.store.getState().messagesPage;

    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />
        );
    let messageElements = state.messages
        .map(m => <Message content={m.message} />
        );

    let newMsgBody = state.newMsgBody;

    let onSendMsgClick = () => {
        props.store.dispatch(sendMsgActionCreator());
    };
    let onNewMsgChange = (e) => {
        let msgBody = e.target.value;
        props.store.dispatch(updateNewMsgBodyActionCreator(msgBody));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
            </div>
            <div>
                <textarea
                    value={newMsgBody}
                    onChange={onNewMsgChange}
                    placeholder='Enter your message ...'></textarea>
            </div>
            <div>
                <button onClick={onSendMsgClick}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;