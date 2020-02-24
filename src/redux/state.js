import {rendererEntireTree} from './../render';

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Ho-ho-ho', likes: 5, dislikes: 7},
            {id: 2, message: 'Ta-ta-ta-ta-ta', likes: 11, dislikes: 9}
        ]
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
export let addPost = (postMessage) => {
    let allPosts = state.profilePage.posts;
    let l = allPosts.length - 1;
    let newId = allPosts[l].id + 1;
    let newPost = {
        id: newId,
        message: postMessage,
        likes: 0,
        dislikes: 0
    }
    allPosts.push(newPost);
    rendererEntireTree(state);
};

export default state;