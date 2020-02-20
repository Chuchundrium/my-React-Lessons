import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/message';


const Dialogs = (props) => {
    let dialogData = [
        { id: 1, name: 'Kuka' },
        { id: 2, name: 'Tata' }
    ];
    let messagesData = [
        { id: 1, message: 'ku-ku?' },
        { id: 2, message: 'bowww' },
        { id: 2, message: 'zap-zap!' }
    ];

    let dialogsElements = dialogData
        .map(d => <DialogItem name={d.name} id={d.id} />
        );
    let messageElements = messagesData
        .map(m => <Message content={m.message} />
        );


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;