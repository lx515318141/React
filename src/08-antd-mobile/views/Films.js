import React, { useEffect, useState } from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import { Swiper, Tabs } from 'antd-mobile'
import NowPlaying from './films/NowPlaying'
import ComingSoon from './films/ComingSoon'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import style from '../css/Films.module.css'

export default function Films(props) {
  const [swiperList, setSwiperList] = useState([{ background: 'red', id: 1, text: '这是第一张图片' },
  { background: 'yellow', id: 2, text: '这是第二张图片' },
  { background: 'blue', id: 3, text: '这是第三张图片' },])

  // useEffect(() => {
  //   // 卖座轮播接口无数据
  //   // axios({
  //   //   url: `https://m.maizuo.com/gateway?type=2&cityId=440300&k=6263511`,
  //   //   headers: {
  //   //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16523749951187425313357825","bc":"440300"}',
  //   //     'X-Host': 'mall.cfg.common-banner'
  //   //   },
  //   //   method: 'get'
  //   // }).then((res) => {
  //   //   // console.log(res.data.data)
  //   //   setSwiperList(res.data.data.films)
  //   // })

  //   setSwiperList([

  //   ])
  // })

  const items = swiperList.map((item, index) => (
    <Swiper.Item key={item.id}>
      <div style={{ height: '200px', background: item.background }}>
        {item.text}
      </div>
    </Swiper.Item>
  ))

  return (
    // 如果要使用标签选择器，可以在组件外部加一个class
    // 如果自己需要两个class，切第二个class不是用来设置样式的，可以使用拼接字符串的方式
    <div className={style.films + ' aaa'}>
      <Swiper autoplay autoplayInterval={3000} loop>{items}</Swiper>
      <div style={{ position: 'sticky', top: 0, zIndex: 1, background: '#fff' }}>
        <Tabs onChange={(key) => {
          props.history.push(key)
        }} activeKey={props.location.pathname}>
          <Tabs.Tab title='正在热映' key='/films/nowPlaying'>
          </Tabs.Tab>
          <Tabs.Tab title='即将上映' key='/films/comingSoon'>
          </Tabs.Tab>
        </Tabs>
      </div>

      <Switch>
        <Route path="/films/nowPlaying" component={NowPlaying} />
        <Route path="/films/comingSoon" component={ComingSoon} />

        <Redirect from='/films' to='/films/nowPlaying'></Redirect>
      </Switch>
    </div>
  )
}
