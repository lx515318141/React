import React, { Component } from 'react'
import './css/04-style.css'

export default class App extends Component {

  state = {
    myText: '',
    list: [
      { id: 1, text: 'HTML', isCheck: false },
      { id: 2, text: 'CSS', isCheck: false },
      { id: 3, text: 'JS', isCheck: false },
    ],
    myHtml: '<button>按钮</button>'
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.myText} onChange={(evt) => {
          this.setState({
            myText: evt.target.value
          })
        }} />
        <button onClick={this.addHandler}>add</button>
        <ul>
          {
            this.state.list.map((item, index) =>
              <li key={item.id}>
                <input type="checkBox" value={item.isCheck} onChange={(evt) => {
                  this.checkHandler(index)
                }} />
                <span style={{ textDecoration: item.isCheck ? 'line-through' : '' }}>{item.text}</span>
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
        {/* <div dangerouslySetInnerHTML={
          {__html: this.state.myHtml}
        }></div> */}
      </div>
    )
  }

  checkHandler = (index) => {
    let newList = this.state.list
    newList[index].isCheck = !newList[index].isCheck
    this.setState({
      list: newList
    })
  }

  addHandler = () => {
    // 此方法可以对list进行深拷贝
    let newList = [...this.state.list]
    console.log(this.state.list[this.state.list.length - 1].id)
    newList.push({
      id: this.state.list[this.state.list.length - 1].id + 1,
      text: this.state.myText
    })
    console.log(newList)
    this.setState({
      list: newList,
      myText: ''
    })
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
