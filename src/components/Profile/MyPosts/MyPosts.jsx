import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts
    .map(p => <Post
      key={p.id}
      message={p.message}
      likesCount={p.likes}
      dislikesCount={p.dislikes}
    />)

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onChangePost = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onChangePost}
            ref={newPostElement}
            value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}


export default MyPosts;