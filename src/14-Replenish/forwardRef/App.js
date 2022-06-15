import React, { Component } from 'react'

export default class App extends Component {
  myText = null
  render() {
    return (
      <div>
        <button onClick={() => {
          this.myText.current.focus()
          this.myText.current.value = ''
        }}>click</button>
        <Child callBack={(el) => {
          this.myText = el
        }}></Child>
      </div>
    )
  }
}

class Child extends Component {
  myText = React.createRef()
  componentDidMount = () => {
    this.props.callBack(this.myText)
  }
  
  render() {
    return (
      <div>
        <input ref={this.myText} defaultValue='123'></input>
      </div>
    )
  }
}