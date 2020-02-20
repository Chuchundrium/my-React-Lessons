import React from 'react';
import s from './Message.module.css'

const Message = (props) => {
    return (
        <div className={s.message}>{props.content}</div>
    )
}

export default Message;