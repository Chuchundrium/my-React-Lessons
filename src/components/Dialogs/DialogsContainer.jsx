import { updateNewMsgBodyActionCreator, sendMsgActionCreator } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMsgBody: state.messagesPage.newMsgBody,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMsgBody: (msgBody) => {
            let action = updateNewMsgBodyActionCreator(msgBody);
            dispatch(action);
        },
        sendMsg: () => {
            dispatch(sendMsgActionCreator());
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;