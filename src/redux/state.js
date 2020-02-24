let rendererEntireTree = () => {
    console.log('bububu');
}
let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Ho-ho-ho', likes: 5, dislikes: 7},
            {id: 2, message: 'Ta-ta-ta-ta-ta', likes: 11, dislikes: 9}
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
};
export const addPost = () => {
    let allPosts = state.profilePage.posts;
    let l = allPosts.length - 1;
    let newId = allPosts[l].id + 1;
    let newPost = {
        id: newId,
        message: state.profilePage.newPostText,
        likes: 0,
        dislikes: 0
    }
    allPosts.push(newPost);
    state.profilePage.newPostText = '';
    rendererEntireTree(state);
};
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rendererEntireTree(state);
}

export const subscribe = (observer) => {
    rendererEntireTree = observer; //one of the patterns
}

export default state;