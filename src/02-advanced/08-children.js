import React, { Component } from 'react'

// 插槽
class Child extends Component {
  render() {
    return (
      <div>
        {/* 这种写法和vue中的插槽功能类似，下面这样的写法可以理解为vue中的具名插槽 */}
        {this.props.children[2]}
        {this.props.children[2]}
        {this.props.children[0]}
      </div>
    )
  }
}

class Swiper extends Component {
  render() {
    return (
      <div>
        {/* 假设下面就是轮播中每个item显示的内容，这样就很好的体现了插槽在组件复用性中的作用 */}
        {this.props.children}
      </div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Child>
          <div>111</div>
          <div>222</div>
          <div>333</div>
        </Child>
        <Swiper>
          <div>111</div>
          <div>222</div>
          <div>333</div>
        </Swiper>
        <Swiper>
          <img src='' />
          <img src='' />
          <img src='' />
        </Swiper>
        <Swiper>
          <div><img src='' />111</div>
          <div><img src='' />222</div>
          <div><img src='' />333</div>
        </Swiper>
      </div>
    )
  }
}

/*
  插槽最大的作用：
  1、组件的复用
  2、减少父子通信
*/