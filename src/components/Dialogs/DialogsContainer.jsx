import { updateNewMsgBodyActionCreator, sendMsgActionCreator } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMsg: () => {
            dispatch(sendMsgActionCreator());
        },
        updateNewMsgBody: (msgBody) => {
            dispatch(updateNewMsgBodyActionCreator(msgBody));
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;