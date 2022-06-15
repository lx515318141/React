/*
  组件的嵌套
*/
import React, { Component } from 'react'

// 安装了react插件后可以通过rcc自动创建基础格式，这里使用的是直接引入Component的方法
// 下面是为了展示组件的不同写法，才使用了不同的写法，在正常生产中组件的写法要保持一致
class Child extends Component {
  render() {
    return (
      <div>Child</div>
    )
  }
}

class NavBar extends Component {
  render() {
    return (
      <div>
        NavBar
        <Child></Child>
      </div>
    )
  }
}

function Swiper() {
  return (
    <div>Swiper</div>
  )
}

// 函数式组件也可以写成箭头函数
const TabBar = () => {
  return (
    <div>TabBar</div>
  )
}

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Swiper></Swiper>
        <TabBar></TabBar>
      </div>
    )
  }
}
