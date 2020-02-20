import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsData = [
    {id: 1, message: 'Ho-ho-ho', likes: 5, dislikes: 7},
    {id: 2, message: 'Ta-ta-ta-ta-ta', likes: 11, dislikes: 9}
];
let postsElements = postsData
.map(p => <Post message={p.message} likesCount={p.likes} dislikesCount={p.dislikes} />)

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts;