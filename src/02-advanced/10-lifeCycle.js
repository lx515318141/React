import React, { Component } from 'react'

// 生命周期初始化
export default class App extends Component {
  state = {
    myname: 'xiaohong'
  }

  // 挂载前
  // 在react16.2之后因为diff算法更新，增加了fiber算法，因为componentWillMount优先级较低，可能会被多次打断重新调用，导致其失去了唯一性并且不安全，所以16.2之后不推荐使用
  // 如果想继续使用，控制台会有警告，如果想消除警告可以在componentWillMount前面加上UNSAFE_，就可以消除警告了
  UNSAFE_componentWillMount() {
    // 此时获取不到dom节点
    console.log('第一次will mount', this.state.myname, document.getElementById('myname'))
    // 此生命周期是上树前，最后一次修改状态的机会
    this.setState({
      myname: 'xiaoming'
    })
    // 还可以在这里进行初始化数据
  }

  // 挂载后
  componentDidMount() {
    // 此时dom节点已经创建完成，可以获取到dom节点
    console.log('第一次did mount', this.state.myname, document.getElementById('myname'))
    // 在此函数中推荐进行一下操作：
    // 1.数据请求axios
    // 2.订阅函数调用
    // 3.setInterval等定时器的调用
    // ※4.基于dom创建完成的操作，可在这里进行，如：初始化BetterScroll
    // 如果需要引入一些使用纯js写的第三方的库，js需要依赖dom节点进行操作，所以必须要dom创建完成才能进行初始化。
  }

  // 正在渲染，正在挂载
  render() {
    return (
      <div>
        <span id='myname'>{this.state.myname}</span>
      </div>
    )
  }
}
