import React, { Component } from 'react'

class Child extends Component {
  render() {
    let { text } = this.props
    return (
      <div>
        child-{text}
        <button onClick={() => {
          // 子组件不可以修改父组件传入的属性
          this.props.text = 'child'
        }}>子组件</button>
      </div>
    )
  }
}

export default class App extends Component {
  state = {
    text: 'father'
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            text: 'mother'
          })
        }}>父组件</button>
        <Child text={this.state.text}/>
      </div>
    )
  }
}
