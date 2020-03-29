import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from './../../../utils/validators'
import { Textarea } from './../../common/FormsControls/formsControls'

const MyPosts = (props) => {

  let postsElements = props.posts
    .map(p => <Post
      key={p.id}
      message={p.message}
      likesCount={p.likes}
      dislikesCount={p.dislikes}
    />)

  // let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AppNewPostReduxForm onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostText"
          placeholder='Enter smth ...'
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AppNewPostReduxForm = reduxForm({
  /* form's unique name: */
  form: 'addNewPostForm'
})(AddNewPostForm);



export default MyPosts;