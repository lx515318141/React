import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'

function Child(props) {
  const [list, setList] = useState([])
  const [name, setName] = useState('xiaowang')
  useEffect(() => {
    getList(props.type)
  }, [props.type])
  useEffect(() => {
    setName(name.substring(0,1).toUpperCase() + name.substring(1))
  }, [name])
  const getList = (type) => {
    axios({
      url: `https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=${type}&k=6263511`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16523749951187425313357825","bc":"440300"}',
        'X-Host': 'mall.film-ticket.film.list'
      },
      method: 'get'
    }).then((res) => {
      console.log(res.data.data)
      setList(res.data.data.films)
    })
  }
  return (
    <div>
      <span>{name}</span>
      <button onClick={() => {
        setName('xiaoming')
      }}>change</button>
      <ul>
        {
          list.map(item => <li key={item.filmId}>
            {item.name}  
          </li>)
        }
      </ul>
    </div>
  )
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