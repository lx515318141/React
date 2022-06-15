import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../css/Tabbar.module.css'

export default function Tabbar() {
  return (
    <div className={style.tabbar}>
      <ul>
        <li>
          <NavLink to='/films' activeClassName={style.lineHeight}>电影</NavLink>
        </li>
        <li>
          <NavLink to='/cinemas' activeClassName={style.lineHeight}>影院</NavLink>
        </li>
        <li>
          <NavLink to='/center' activeClassName={style.lineHeight}>我的</NavLink>
        </li>
      </ul>
    </div>
  )
}
