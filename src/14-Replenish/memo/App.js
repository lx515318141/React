import React, { Component, memo } from 'react'

export default class App extends Component {
  state = {
    name: 'xiaoming',
    title: 'aaa'
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            name: 'xiaohong'
          })
        }}>click1</button>
        <button onClick={() => {
          this.setState({
            title: 'bbb'
          })
        }}>click2</button>
        {this.state.name}
        <Child title={this.state.title}></Child>
      </div>
    )
  }
}

const Child = memo((props) => {
  console.log('111')
  return (
    <div>
      child-{props.title}
    </div>
  )
})