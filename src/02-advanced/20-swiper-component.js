import React, { Component } from 'react'
import MySwiper from './swiper/Swiper'
import SwiperItem from './swiper/SwiperItem'
import axios from 'axios'


export default class App extends Component {
  state = {
    list: []
  }

  componentDidMount = () => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=6263511',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16523749951187425313357825","bc":"440300"}',
        'X-Host': 'mall.film-ticket.film.list'
      },
      method: 'get'
    }).then((res) => {
      console.log(res.data.data.films)
      this.setState({
        list: res.data.data.films
      })
    })
  }

  componentDidUpdate = (prevProps, prevState) => {

  }


  render() {
    return (
      <div>
        <MySwiper loop={ true }>
          {
            this.state.list.map(item => <SwiperItem key={item.filmId}>
              <img src={item.poster} alt={item.name}/>
            </SwiperItem>)
          }
        </MySwiper>
      </div>
    )
  }
}
