import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/message';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {
    let dialogsElements = props.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id} />
        );
    let messageElements = props.messages
        .map(m => <Message key={m.id} content={m.message} />
        );
        let sendMsg = () => {
            props.sendMsg();
        };
        let updateNewMsgBody = (e) => {
            let msgBody = e.target.value;
            props.updateNewMsgBody(msgBody);
        }

        if (!props.isAuth) return <Redirect to={'/Login'}/>

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
                    onChange={updateNewMsgBody}
                    placeholder='Enter your message ...'></textarea>
            </div>
            <div>
                <button onClick={sendMsg}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;