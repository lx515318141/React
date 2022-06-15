import axios from 'axios'
import React, { Component } from 'react'
import BScroll from 'better-scroll'

export default class Cinema extends Component {
  constructor() {
    super()
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=562387',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16523749951187425313357825","bc":"440300"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      },
      method: 'get'
    }).then((res) => {
      console.log(res.data.data)
      this.setState({
        cinemaList: res.data.data.cinemas,
        bakCinemaList: res.data.data.cinemas
      })
      new BScroll('.wrapper')
    })
  }
  state = {
    cinemaList: [],
    bakCinemaList: []
  }
  myInput = React.createRef()
  render() {
    return (
      <div>
        <div>
          <input type='text' onInput={this.searchHandler} />
        </div>
        <div className='wrapper'>
          <ul className='cinemaList'>
            {this.state.cinemaList.map((item) => <li key={item.cinemaId}>
              <p className='name'>{item.name}</p>
              <p className='address'>{item.address}</p>
            </li>)}
          </ul>
        </div>
      </div>
    )
  }
  searchHandler = (evt) => {
    let value = evt.target.value.toUpperCase()
    let newList = this.state.bakCinemaList.filter(item => item.name.toUpperCase().includes(value) || item.address.toUpperCase().includes(value))
    this.setState({
      cinemaList: newList
    })
  }
}
