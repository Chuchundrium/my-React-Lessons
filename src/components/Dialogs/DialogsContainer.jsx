import { updateNewMsgBodyActionCreator, sendMsgActionCreator } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMsgBody: state.messagesPage.newMsgBody
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;