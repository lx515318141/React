import React, { Component } from 'react'

export default class App extends Component {
  state = {
    myname: 'xiaoli',
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            myname: 'xiaozhang'
          })
        }}>click</button>
        <span>{this.state.myname}</span>
      </div>
    )
  }

  // shouldComponentUpdate主要为了提高性能，因为只要进行了setState操作，不管state是否真的改变了，都会触发更新
  // 所以需要通过shouldComponentUpdate来判断是否需要更新
  shouldComponentUpdate(nextProps, nextState) {
    // 返回true就会进行更新，返回false就不会进行更新
    // return true;
    // 可以在这里进行判断，如果老状态不等于新状态的时候就返回true，否则返回false
    // 在这里获取this.state获取到的是老的状态，如果想获取新的状态需要使用形参nextState
    if (nextState.myname !== this.state.myname) {
      return true
    }

    // 如果需要对比的值比较多，可以直接进行对象对比
    // JSON.stringify(nextState) === JSON.stringify(this.state)

    return false
  }

  componentDidUpdate = () => {
    console.log('componentDidUpdate')
  }
}
