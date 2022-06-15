import React, { Component } from 'react'
import './css/04-style.css'

export default class App extends Component {
  myRef = React.createRef()

  state = {
    list: [
      { id: 1, text: 'HTML' },
      { id: 2, text: 'CSS' },
      { id: 3, text: 'JS' },
    ],
    myHtml: '<button>按钮</button>'
  }

  render() {
    return (
      <div>
        <input ref={ this.myRef }/>
        <button onClick={this.addHandler}>add</button>
        <ul>
          {
            this.state.list.map((item, index) =>
              <li key={item.id}>
                {item.text}
                <button onClick={() => this.delHandler(index)}>del</button>
              </li>
            )
          }
        </ul>

        {/* 条件渲染 */}
        {/* 相当于vue中的v-if */}
        {/* {this.state.list.length ? null : <div>暂无数据</div>}
        {this.state.list.length === 0 && <div>暂无数据</div>} */}

        {/* 相当于vue中的v-show */}
        {<div className={ this.state.list.length ? 'hiden' : '' }>暂无数据</div>}

        {/* 用于显示富文本内容，可以显示html标签 */}
        <div dangerouslySetInnerHTML={
          {__html: this.state.myHtml}
        }></div>
      </div>
    )
  }

  addHandler = () => {
    // 此方法可以对list进行深拷贝
    let newList = [...this.state.list]
    console.log(this.state.list[this.state.list.length - 1].id)
    newList.push({
      id: this.state.list[this.state.list.length - 1].id + 1,
      text: this.myRef.current.value
    })
    console.log(newList)
    this.setState({
      list: newList
    })
    this.myRef.current.value = ''
    setTimeout(() => {
      console.log(this.state.list, 'settime')
    }, 0);
    console.log(this.state.list)
  }

  delHandler = (index) => {
    // 此方法可以对list进行深拷贝
    let newList = this.state.list.slice();
    newList.splice(index, 1)
    this.setState({
      list: newList
    })
  }
}
