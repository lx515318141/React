import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 1
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.addHandler1}>add1</button>
        <button onClick={this.addHandler2}>add2</button>
      </div>
    )
  }
  addHandler1 = () => {
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count)
    })
    // console.log(this.state.count)

    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count)
    })
    // console.log(this.state.count)

    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count)
    })
    // console.log(this.state.count)
  }
  addHandler2 = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      })
      console.log(this.state.count)

      this.setState({
        count: this.state.count + 1
      })
      console.log(this.state.count)

      this.setState({
        count: this.state.count + 1
      })
      console.log(this.state.count)
    }, 0);
  }
}



/*
  setState处在同步逻辑中时，异步更新状态，异步更新真实dom
  setState处在异步逻辑中时，同步更新状态，同步更新真实dom
  setState接受第二个参数，第二个参数式回调，状态和dom更新结束后会触发
*/