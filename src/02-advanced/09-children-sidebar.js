import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <div style={{ background: 'red' }}>
        {this.props.children}
        <span>Navbar</span>
      </div>
    )
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div style={{ background: 'yellow', width: '100px' }}>
        <ul>
          <li>
            11111
          </li>
          <li>
            11111
          </li>
          <li>
            11111
          </li>
          <li>
            11111
          </li>
          <li>
            11111
          </li>
          <li>
            11111
          </li>
        </ul>
      </div>
    )
  }
}

export default class App extends Component {
  state = {
    isShow: false
  }
  
  render() {
    return (
      <div>
        <Navbar>
          <button onClick={() => {
            this.setState({
              isShow: !this.state.isShow
            })
          }}>show</button>
        </Navbar>
        { this.state.isShow && <Sidebar /> }
      </div>
    )
  }
}
