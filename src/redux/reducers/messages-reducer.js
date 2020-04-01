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
    ]
}
const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MSG:
            return {
                ...state,
                messages: [
                    ...state.messages, 
                    { id: (state.messages.length + 1), message: action.newMsgBody }
                ]
            };
        default:
            return state;
    }
}

export const sendMsgActionCreator = (newMsgBody) => ({
    type: SEND_MSG,
    newMsgBody
})

export default messagesReducer;