import React, { Component } from 'react'

export default class App extends Component {
  state = {
    myName: '小刚',
    myCollect: false,
  }
  render() {
    return (
      <div>
        <h1>欢迎来到React-{this.state.myName}</h1>
        <button onClick={() => {
          
          this.setState({
            myCollect: !this.state.myCollect,
            myName: '小明'
          })
        }}>{this.state.myCollect ? '取消收藏' : '收藏'}</button>
      </div>
    )
  }
}
