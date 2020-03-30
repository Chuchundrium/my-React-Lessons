import React from 'react';
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return <header className={s.header}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZyZ3midqAHWJTRUzs0OJseZGag35vedI3iqBccaTxBEkKi7II' alt='wallpaper'/>
    <div className={s.loginBlock}>
      {
        props.isAuth 
          ? <div>{props.login}  <button onClick={props.logout}>Logout</button></div>
          : <NavLink to={'/login'}>Login</NavLink>
      }
    </div>
  </header>
}

export default Header;