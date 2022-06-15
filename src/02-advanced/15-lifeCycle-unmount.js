import React, { Component } from 'react'

class Child extends Component {
  render() {
    return(
      <div>
        child
      </div>
    )
  }

  componentDidMount = () => {
    window.onresize = () => {
      console.log('resize')
    }

    this.timer = setInterval(() => {
      console.log('settimeout')
    }, 1000);
  }

  // 组件销毁时触发，用于解绑定时器等绑定在window上的事件
  componentWillUnmount = () => {
    console.log('componentWillUnmount')
    window.onresize = null
    clearInterval(this.timer)
  }
  
}

export default class App extends Component {
  state = {
    isShow: true
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            isShow: !this.state.isShow
          })
        }}>click</button>
        {this.state.isShow && <Child></Child>}
      </div>
    )
  }
}
