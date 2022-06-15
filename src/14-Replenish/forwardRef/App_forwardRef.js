import React, { Component, forwardRef } from 'react'

export default class App extends Component {
  myText = React.createRef()
  render() {
    return (
      <div>
        <button onClick={() => {
          this.myText.current.focus()
          this.myText.current.value = ''
        }}>click</button>
        <Child ref={this.myText}></Child>
      </div>
    )
  }
}


const Child = forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} defaultValue='456'></input>
    </div>
  )
})