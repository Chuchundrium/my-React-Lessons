import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import sidebarReducer from './sidebar-reducer';

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        
        this._callSubscriber(this._state);
    }
}

window.store = store;

export default store;