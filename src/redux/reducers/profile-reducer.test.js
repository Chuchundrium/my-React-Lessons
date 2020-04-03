import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

/** for test:
 * profileReducer({...put planned state here...},{...put planned action here...})
 * check, that newState is expected value.
 */

/** 1. initial test data */
let addAction = addPostActionCreator('New post');
let state = {
    posts: [
        { id: 1, message: 'Ho-ho-ho', likes: 5, dislikes: 7 },
        { id: 2, message: 'Ta-ta-ta-ta-ta', likes: 11, dislikes: 9 }
    ]
};

/** 2. "test body" */
it('should increment posts length', () => {
    let newState = profileReducer(state, addAction);
    /** 3. expectation */
    expect(newState.posts.length).toBe(3);
});

/** 2. "test body" */
it('should add `New post` to the posts end', () => {
    let newState = profileReducer(state, addAction);
    /** 3. expectation */
    expect(newState.posts[2].message).toBe('New post');
});

/** tdd - Test-Driven Development:
 * - for something that is still absent in logic.
 * - first create test
 * - then create logic */
it('should decrement posts length', () => {
    let deleteAction = deletePost(1);
    let newState = profileReducer(state, deleteAction);
    expect(newState.posts.length).toBe(1);
})
it('should not decrement posts length if incorrect id', () => {
    let deleteAction = deletePost(1000);
    let newState = profileReducer(state, deleteAction);
    expect(newState.posts.length).toBe(2);
})