import React, { Component } from 'react'
import store from './redux/store'
// import './01-generator'

export default class App extends Component {
  render() {
    return (
      <div>
        <button onClick={() => {
          if (store.getState().list1.length === 0) {
            // dispatch
            store.dispatch({
              type: 'get-list1'
            })
          } else {
            console.log('缓存', store.getState().list1)
          }
        }}>获取ajax异步数据1</button>
        <button onClick={() => {
          if (store.getState().list2.length === 0) {
            // dispatch
            store.dispatch({
              type: 'get-list2'
            })
          } else {
            console.log('缓存', store.getState().list2)
          }
        }}>获取ajax异步数据2</button>
      </div>
    )
  }
}
