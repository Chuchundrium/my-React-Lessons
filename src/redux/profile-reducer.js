const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Ho-ho-ho', likes: 5, dislikes: 7 },
        { id: 2, message: 'Ta-ta-ta-ta-ta', likes: 11, dislikes: 9 }
    ],
    newPostText: 'cha-cha-cha'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const allPosts = state.posts;
            const newId = allPosts.length;
            let newPost = {
                id: newId,
                message: state.newPostText,
                likes: 0,
                dislikes: 0
            }
            allPosts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer;