import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper'
import '../../../node_modules/swiper/swiper-bundle.min.css'

Swiper.use([Navigation, Pagination])
export default class MySwiper extends Component {
  state = {}

  componentDidMount = () => {
    // // 同步时在这里new
    // new Swiper ('.swiper',{
    //   loop: this.props.loop,
      
    //   // 如果需要分页器
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },
    // })
  }
  
  componentDidUpdate = (prevProps, prevState) => {
    // 异步时在这里new
    new Swiper ('.swiper',{
      loop: this.props.loop,
      
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    })
  }
  

  render() {
    return (
      <div>
        <div className="swiper" style={{ background: 'yellow' }}>
          <div className="swiper-wrapper">
            {
              this.props.children
            }
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }
}
