import React, { Component } from 'react'
import axios from 'axios'

class Child extends Component {
  state = {
    list: [],
    type: 1
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.list.map(item => <li key={item.filmId}>{item.name}</li>)
          }
        </ul>
      </div>
    )
  }

  componentDidMount = () => {
    this.getList(1)
  }


  // 该生命周期为静态方法，所以其内部没有this，无法获取this.state
  // 但是该生命周期不能进行数据请求，因为数据请求是异步的，而return是同步的。要想异步请求需要配合componentDidUpdate使用
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('getDerivedStateFromProps', nextProps)
    // 该生命周期必须return，return的状态会和老状态进行合并，如果一次事件循环中多次调用，return会合并为一次所以不会重复执行
    return {
      type: nextProps.type
    }
  }

  // 
  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.type === this.state.type) {
      return
    }
    this.getList(this.state.type)
  }
  

  // 请求数据
  getList = (type) => {
    axios({
      url: `https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=${type}&k=6263511`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16523749951187425313357825","bc":"440300"}',
        'X-Host': 'mall.film-ticket.film.list'
      },
      method: 'get'
    }).then((res) => {
      console.log(res.data.data)
      this.setState({
        list: res.data.data.films
      })
    })
  }
}

export default class App extends Component {
  state = {
    current: 1
  }
  render() {
    return (
      <div>
        <ul>
          <li onClick={() => {
            this.setState({
              current: 1
            })
          }} style={{ color: this.state.current === 1 ? 'red' : 'black' }}>
            正在热映
          </li>
          <li onClick={() => {
            this.setState({
              current: 2
            })
          }} style={{ color: this.state.current === 2 ? 'red' : 'black' }}>
            即将上映
          </li>
        </ul>
        <Child type={this.state.current}></Child>
      </div>
    )
  }
}
