import React, { Component } from 'react'
import axios from 'axios'

class Child extends Component {
  state = {
    list: [],
    current: 1
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


  // 父组件进行更新，就会触发子组件的此生命周期，即使父组件没有给子组件传属性，也会触发此生命周期
  UNSAFE_componentWillReceiveProps(nextProps) {
    // 这里会最先收到父组件传进来的属性，可以对属性进行逻辑处理，请求axios等
    this.getList(nextProps.type)
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
