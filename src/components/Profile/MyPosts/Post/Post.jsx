import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return <div className={s.item}>
    <img src='https://avatars.mds.yandex.net/get-pdb/163339/409596c7-941b-4b9f-b53e-889b79e556be/s1200' />
    {props.message}
    <div>
      <span> Like </span> {props.likesCount}
      <span> Dislike </span> {props.dislikesCount}
    </div>
  </div>
}

export default Post;