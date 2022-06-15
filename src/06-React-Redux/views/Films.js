import React from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import NowPlaying from './films/NowPlaying'
import ComingSoon from './films/ComingSoon'
import { NavLink } from 'react-router-dom'
import style from '../css/Films.module.css'

export default function Films() {
  return (
    // 如果要使用标签选择器，可以在组件外部加一个class
    // 如果自己需要两个class，切第二个class不是用来设置样式的，可以使用拼接字符串的方式
    <div className={style.films + ' aaa'}>
      <div id={style.swiper}>轮播</div>
      <ul className={style.tab}>
        <li>
          {/* 此时css会被当成一个模块引入，并且style中会有lineHeight重命名后的名称，所以需要用下面的写法 */}
          <NavLink to='/films/nowPlaying' activeClassName={style.lineHeight}>正在热映</NavLink>
        </li>
        <li>
          <NavLink to='/films/comingSoon' activeClassName={style.lineHeight}>即将上映</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/films/nowPlaying" component={NowPlaying} />
        <Route path="/films/comingSoon" component={ComingSoon} />

        <Redirect from='/films' to='/films/nowPlaying'></Redirect>
      </Switch>
    </div>
  )
}
