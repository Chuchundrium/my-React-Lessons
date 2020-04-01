import { sendMsgActionCreator } from '../../redux/reducers/messages-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMsgBody: state.messagesPage.newMsgBody
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMsg: (newMsgBody) => {
            dispatch(sendMsgActionCreator(newMsgBody));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);;