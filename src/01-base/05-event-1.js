import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <input/>
        <button onClick={() => {
          // 逻辑过多时不推荐这种写法
          console.log('click1')
        }}>add1</button>
        <button onClick={this.clickAdd2}>add2</button>
        <button onClick={this.clickAdd3}>add3</button>
        <button onClick={() => {
          this.clickAdd4()
        }}>add4</button>
      </div>
    )
  }
  clickAdd2() {
    console.log('click2')
  }
  clickAdd3 = () => {
    console.log('click3')
  }
  clickAdd4 = () => {
    console.log('click4')
  }
}
