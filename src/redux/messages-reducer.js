const UPDATE_NEW_MSG_BODY = 'UPDATE-NEW-MSG-BODY';
const SEND_MSG = 'SEND-MSG';

let initialState = {
    dialogs: [
        { id: 1, name: 'Kuka' },
        { id: 2, name: 'Tata' }
    ],
    messages: [
        { id: 1, message: 'ku-ku?' },
        { id: 2, message: 'bowww' },
        { id: 3, message: 'zap-zap!' }
    ],
    newMsgBody: ''
}
const messagesReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MSG_BODY:
            state.newMsgBody = action.newMsgBody;
            return state;
        case SEND_MSG:
            const allMsg = state.messages;
            const newId = allMsg.length + 1;
            let newMsg = {
                id: newId,
                message: state.newMsgBody
            }
            allMsg.push(newMsg);
            state.newMsgBody = '';
            return state;
        default:
            return state;
    }
}

export const sendMsgActionCreator = () => ({
    type: SEND_MSG
})
export const updateNewMsgBodyActionCreator = (msgBody) => ({
    type: UPDATE_NEW_MSG_BODY,
    newMsgBody: msgBody
})

export default messagesReducer;