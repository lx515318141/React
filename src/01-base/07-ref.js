import React, { Component } from 'react'

export default class App extends Component {
  myRef = React.createRef()
  render() {
    return (
      <div>
        <input ref="myText"/>
        <button onClick={ () => {
          console.log('click1', this.refs.myText.value)
        } }>add1</button>
        <input ref={ this.myRef }/>
        <button onClick={ () => {
          console.log('click2', this.myRef.current.value)
        } }>add2</button>
        <button onClick={this.clickHandler}>add3</button>
      </div>
    )
  }
  clickHandler = (evt) => {
    console.log('click3', this.myRef.current.value, evt)
  }
}
