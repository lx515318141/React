import React, { Component } from 'react'

export default class App extends Component {
  usernameRef = React.createRef()
  state = {
    username: 'lixiang'
  }
  render() {
    return (
      <div>
        {/* 受控写法 */}
        <input type="text" defaultValue="lixiang" ref={ this.usernameRef } />
        <button onClick={() => {
          console.log(this.usernameRef.current.value)
        }}>登录</button>
        <button onClick={() => {
          this.usernameRef.current.value = ''
        }}>重置</button>
        {/* 非受控写法 */}
        <input type="text" value={this.state.username} onChange={(evt) => {
          this.setState({
            username: evt.target.value
          })
        }} />
        <button onClick={() => {
          console.log(this.state.username)
        }}>登录</button>
        <button onClick={() => {
          this.setState({
            username: ''
          })
        }}>重置</button>
      </div>
    )
  }
}
