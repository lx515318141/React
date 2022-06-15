import { Map } from 'immutable'
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    info: Map({
      name: 'xiaoming',
      age: 10,
      filter: Map({
        text: '',
        up: true,
        down: false,
      })
    })
  }

  componentDidMount = () => {
    console.log(this.state.info.get('filter'))
  }
  
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            info: this.state.info.set('name', 'xiaohuang').set('age', 100)
          })
        }}>change</button>
        {this.state.info.get('name')}-{this.state.info.get('age')}
        <Child filter={this.state.info.get('filter')}></Child>
      </div>
    )
  }
}

class Child extends Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    console.log(this.props.filter)
    if (this.props.filter === nextProps) {
      return false
    }
    return true
  }
  

  componentDidMount = () => {
    console.log('child')
  }
  
  render() {
    return (
      <div>
        child
      </div>
    )
  }
}