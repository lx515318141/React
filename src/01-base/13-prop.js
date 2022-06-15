import React, { Component } from 'react'
import Navbar from './NavBar'
import Sidebar from './Sidebar/Sidebar'

export default class App extends Component {
  render() {
    // 假设下面的对象是从父组件传进来的
    var obj = {
      title: '测试',
      leftShow: false
    }
    return (
      <div>
        <div>
          <h2>首页</h2>
          <Navbar title='首页' leftShow={false} />
        </div>

        <div>
          <h2>列表</h2>
          <Navbar title='列表' />
        </div>

        <div>
          <h2>购物车</h2>
          <Navbar title='购物车' />
        </div>

        <Navbar title={obj.title} leftShow={obj.leftShow} />
        {/* 下面是上面的简写 */}
        <Navbar {...obj} />
        <Sidebar bg="yellow" position="right" />
      </div>
    )
  }
}
