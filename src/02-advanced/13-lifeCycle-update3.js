import React, { Component } from 'react'

class Child extends Component {
  render() {
    return (
      <div style={{ height: '100px', width: '100px', border: this.props.current===this.props.index ? '1px solid red' : '1px solid blue', float: 'left', margin: '10px' }}></div>
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.current === this.props.index || nextProps.current === nextProps.index) {
      return true
    }
    return false
  }

  componentDidUpdate = () => {
    console.log('componentDidUpdate')
  }
}

export default class App extends Component {
  state = {
    current: 0,
    list: ['01', '02', '03', '04', '05', '06', '07', '08', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
  }
  render() {
    return (
      <div>
        <input type='number' onChange={(evt) => {
          this.setState({
            current: Number(evt.target.value)
          })
        }} />
        
        <div style={{ overflow: 'hidden' }}>
          {
            this.state.list.map((item, index) => 
              <Child key={item} current={this.state.current} index={index}></Child>
            )
          }
        </div>
      </div>
    )
  }
}
