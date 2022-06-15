import React, { Component } from 'react'

export default class App extends Component {
  a = 100
  render() {
    return (
      <div>
        <input/>
        <button onClick={() => {
          // 逻辑过多时不推荐这种写法
          // 箭头函数中的this和外部保持一致，所以this指向APP
          console.log('click1', this.a)
        }}>add1</button>
        {/* 如果直接写this.clickAdd2，此时函数内的this指向为undefined，所以应写成this.clickAdd2.bind(this) */}
        <button onClick={this.clickAdd2.bind(this)}>add2</button>
        <button onClick={this.clickAdd3}>add3</button>
        <button onClick={() => this.clickAdd4()}>add4</button>
      </div>
    )
  }
  clickAdd2() {
    console.log('click2', this.a)
  }
  // 通过evt参数依然可以拿到Event对象
  clickAdd3 = (evt) => {
    console.log('click3', this.a, evt)
  }
  clickAdd4 = () => {
    console.log('click4', this.a)
  }
}
