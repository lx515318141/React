import React, { Component } from 'react'
import axios from 'axios'
import './css/05-statusBoost.css'

var bus = {
  list:[],
  // 订阅
  subscribe(callback) {
    this.list.push(callback)
  },
  // 发布
  publish(value) {
    this.list.forEach(callback => {
      callback && callback(value)
    })
  }
}

class FilmItem extends Component {
  render() {
    let {name, poster, category, nation, synopsis} = this.props
    return (
      <div className='item' onClick={() => {
        bus.publish(synopsis)
      }}>
        <img src={poster} />
        <div className='info'>
          <p>{name}</p>
          <p>{category}</p>
          <p>{nation}</p>
        </div>
      </div>
    )
  }
}

class FilmData extends Component {
  constructor() {
    super()
    this.state = {
      info: ''
    }
    bus.subscribe(this.setInfo)
  }
  
  setInfo = (value) => {
    console.log('发布订阅')
    this.setState({
      info: value
    })
  }
  render() {
    return (
      <div className='filmData'>
        <p>{this.state.info}</p>
      </div>
    )
  }
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
    }
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=6263511',
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
  render() {
    return (
      <div className='statusBoost'>
        <ul>
          {
            this.state.list.map(item => <FilmItem key={item.filmId} {...item}></FilmItem>)
          }
        </ul>
        <FilmData></FilmData>
      </div>
    )
  }
}
