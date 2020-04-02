import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from './../../../utils/validators'
import { Textarea } from './../../common/FormsControls/formsControls'

/** 4. for functional component use React.memo for similar optimization */
// class MyPosts extends PureComponent {
//   /** 3.
//    * ^^^ PureComponent contains shouldComponentUpdate by default
//    *  class MyPosts extends Component { */
//   /** 2.  
//   * shouldComponentUpdate(nextProps, nextState) {
//      * return (nextProps != this.props) || (nextState != this.state);
//      * if false -> no render!
//     * } */

//   render() {
//     /** 1.
//      * by default class / functional component may be render several times without changes and necessity.
//      * for test use here:
//      * console.log('-------------AGAIN AND AGAIN AND AGAIN----------------');
//      * for solving use shouldComponentUpdate before render
//     */

//     let postsElements = this.props.posts
//       .map(p => <Post
//         key={p.id}
//         message={p.message}
//         likesCount={p.likes}
//         dislikesCount={p.dislikes}
//       />)

//     // let newPostElement = React.createRef();

//     let onAddPost = (values) => {
//       this.props.addPost(values.newPostText);
//     };

//     return (
//       <div className={s.postsBlock}>
//         <h3>My posts</h3>
//         <AppNewPostReduxForm onSubmit={onAddPost} />
//         <div className={s.posts}>
//           {postsElements}
//         </div>
//       </div>
//     )
//   }
// }

const MyPosts = React.memo((props) => {
  // console.log('-------------AGAIN AND AGAIN AND AGAIN----------------');
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
});

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