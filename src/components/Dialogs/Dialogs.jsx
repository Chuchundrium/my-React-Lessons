import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/message';

const Dialogs = (props) => {
    let dialogsElements = props.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />
        );
    let messageElements = props.messages
        .map(m => <Message content={m.message} />
        );
        let onSendMsgClick = () => {
            props.onSendMsgClick();
        };
        let onNewMsgChange = (e) => {
            let msgBody = e.target.value;
            props.onNewMsgChange(msgBody);
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
                    value={props.newMsgBody}
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