import React, { Component } from 'react'

export default class App extends Component {
  state = {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }
  myref = React.createRef()
  render() {
    return (
      <div>
        <h1>邮箱</h1>
        <button onClick={() => {
          this.setState({
            list: [...[11, 12, 13, 14, 15, 16, 17, 18, 19], ...this.state.list]
          })
        }}>添加</button>
        <div style={{ height: '200px', background: 'yellow', overflow: 'auto' }} ref={this.myref}>
          <ul style={{ margin: '0', padding: '0' }}>
            {
              this.state.list.map(item => <li key={item} style={{ margin: '20px', listStyle: 'none' }}>
                {item}
              </li>)
            }
          </ul>
        </div>
      </div>
    )
  }

  // 该生命周期触发在每次更新时，render之后，componentDidUpdate之前，正要上树之前的一瞬间，必须return一个值，该值可以在componentDidUpdate的第三个参数中被接收
  getSnapshotBeforeUpdate() {
    // 该生命周期可以在render之后，componentDidUpdate之前，对dom进行一个快照，记录下相关信息，通过return传递给componentDidUpdate
    return this.myref.current.scrollHeight
  }

  componentDidUpdate = (prevProps, prevState, value) => {
    // 更新前的高度
    console.log(value)
    // 更新后的高度
    console.log(this.myref.current.scrollHeight)
    // 滚动到原来的位置
    this.myref.current.scrollTop += (this.myref.current.scrollHeight - value)
  }

}
