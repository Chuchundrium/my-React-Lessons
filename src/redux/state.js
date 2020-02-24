const store = {
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
                { id: 2, message: 'zap-zap!' }
            ]
        },
        sidebar: {}
    },

    getState() {
        return this._state; 
    },

    _callSubscriber() {
        console.log('bububu');
    },

    addPost() {
        const allPosts = this._state.profilePage.posts;
        const l = allPosts.length - 1;
        const newId = allPosts[l].id + 1;
        let newPost = {
            id: newId,
            message: this._state.profilePage.newPostText,
            likes: 0,
            dislikes: 0
        }
        allPosts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }

}

window.store = store;

export default store;