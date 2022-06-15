import React, { Component } from 'react'

export default class App extends Component {
  state = {
    list: [
      { id: 1, text: '111' },
      { id: 2, text: '222' },
      { id: 3, text: '333' },
    ]
  }
  render() {
    // 也可以将ul中的内容抽离出来写在上面
    // var newList = this.state.list.map(item => <li key={item.id}>{item.text}</li>)
    return (
      <div>
        <ul>
          {
            // newList
            this.state.list.map(item => <li key={item.id}>{item.text}</li>)
          }
        </ul>
      </div>
    )
  }
}
