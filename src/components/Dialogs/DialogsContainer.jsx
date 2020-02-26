import React from 'react';
import { updateNewMsgBodyActionCreator, sendMsgActionCreator } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage;

    let onSendMsgClick = () => {
        props.store.dispatch(sendMsgActionCreator());
    };
    let onNewMsgChange = (msgBody) => {
        props.store.dispatch(updateNewMsgBodyActionCreator(msgBody));
    }

    return (
        <Dialogs 
            onSendMsgClick={onSendMsgClick}
            onNewMsgChange={onNewMsgChange}
            newMsgBody={state.newMsgBody}
            dialogs={state.dialogs}
            messages={state.messages}
        />
    )
}

export default DialogsContainer;