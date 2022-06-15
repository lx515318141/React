import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', background: 'green' }}>
        <button>返回</button>
        <span>首页</span>
        <button onClick={() => {
          this.props.myEvent()
        }}>我的</button>
      </div>
    )
  }
}
