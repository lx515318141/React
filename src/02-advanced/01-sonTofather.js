import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <div style={{ background: 'red' }}>
        <button onClick={() => {
          console.log(this.props.event)
          this.props.event()
        }}>show</button>
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
  eventHandler = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  
  render() {
    return (
      <div>
        <Navbar event={this.eventHandler} />
        { this.state.isShow && <Sidebar /> }
      </div>
    )
  }
}
