import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper'
import '../../node_modules/swiper/swiper-bundle.min.css'

Swiper.use([Navigation, Pagination])
export default class App extends Component {
  state = {
    list: ['111', '222', '333']
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        list: ['aaa', 'bbb', 'ccc']
      })
      // 也可以在这里new Swiper
    }, 1000);
    // 同步时在这里new
    // new Swiper ('.swiper',{
    //   loop: true, // 循环模式选项
      
    //   // 如果需要分页器
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },
    // })
  }
  
  componentDidUpdate = (prevProps, prevState) => {
    // 异步时在这里new
    new Swiper ('.swiper',{
      loop: true, // 循环模式选项
      
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    })
  }
  

  render() {
    return (
      <div>
        <div className="swiper" style={{ height: '200px', background: 'yellow' }}>
          <div className="swiper-wrapper">
            {
              this.state.list.map(item => <div className="swiper-slide" key={item}>{item}</div>)
            }
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }
}
