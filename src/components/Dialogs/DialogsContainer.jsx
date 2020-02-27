import React from 'react';
import { updateNewMsgBodyActionCreator, sendMsgActionCreator } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../storeContext';

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().messagesPage;

                    let onSendMsgClick = () => {
                        store.dispatch(sendMsgActionCreator());
                    };
                    let onNewMsgChange = (msgBody) => {
                        store.dispatch(updateNewMsgBodyActionCreator(msgBody));
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
            }

        </StoreContext.Consumer>
    )

}

export default DialogsContainer;