import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../css/Tabbar.module.css'
import { TabBar } from 'antd-mobile'
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import { withRouter } from 'react-router-dom'

function LXTabbar(props) {
  const tabs = [
    {
      key: '/films',
      title: '电影',
      icon: <AppOutline />
    },
    {
      key: '/cinemas',
      title: '影院',
      icon: <UnorderedListOutline />
    },
    {
      key: '/center',
      title: '我的',
      icon: <UserOutline />,
    },
  ]

  return (
    <div className={style.tabbar}>
      <TabBar onChange={(path) => {
        console.log(props)
        props.history.push(path)
      }} activeKey={'/' + props.location.pathname.split('/')[1]}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  )
}

export default withRouter(LXTabbar)