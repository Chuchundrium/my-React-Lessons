const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MSG_BODY = 'UPDATE-NEW-MSG-BODY';
const SEND_MSG = 'SEND-MSG'

const store = {
    //private variables
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Ho-ho-ho', likes: 5, dislikes: 7 },
                { id: 2, message: 'Ta-ta-ta-ta-ta', likes: 11, dislikes: 9 }
            ],
            newPostText: 'cha-cha-cha'
        },
        messagesPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('bububu');
    },
    //methods can not modify state
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    //method for state modifying
    dispatch(action) {
        if (action.type === ADD_POST) {
            const allPosts = this._state.profilePage.posts;
            const newId = allPosts.length;
            let newPost = {
                id: newId,
                message: this._state.profilePage.newPostText,
                likes: 0,
                dislikes: 0
            }
            allPosts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_MSG_BODY) {
            this._state.messagesPage.newMsgBody = action.newMsgBody;
            this._callSubscriber(this._state);

        } else if (action.type === SEND_MSG) {

            const allMsg = this._state.messagesPage.messages;
            console.log(allMsg);
            const newId = allMsg.length + 1;
            let newMsg = {
                id: newId,
                message: this._state.messagesPage.newMsgBody
            }
            allMsg.push(newMsg);
            this._state.messagesPage.newMsgBody = '';
            this._callSubscriber(this._state);
        }
    }
}


export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const sendMsgActionCreator = () => ({
    type: SEND_MSG
})
export const updateNewMsgBodyActionCreator = (msgBody) => ({
    type: UPDATE_NEW_MSG_BODY,
    newMsgBody: msgBody
})

window.store = store;

export default store;