import axios from 'axios'
import React, { Component } from 'react'
import BScroll from 'better-scroll'

export default class App extends Component {
  state = {
    myname: 'xiaoming',
    list: []
  }

  componentDidMount = () => {
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
        list: res.data.data.cinemas,
      })
      

      // new BScroll('.wrapper')
    })
  }


  // 千万不要在render里面setState，不然会触发死循环
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            myname: 'huangxiaoming'
          })
        }}>click</button>
        <span id='myname'>{this.state.myname}</span>
        <div className='wrapper' style={{height: '200px', background: 'yellow', overflow: 'hidden'}}>
          <ul className='cinemaList'>
            {this.state.list.map((item) => <li key={item.cinemaId}>
              <p className='name'>{item.name}</p>
              <p className='address'>{item.address}</p>
            </li>)}
          </ul>
        </div>
      </div>
    )
  }

  // 16.2之后同样不安全
  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate', document.getElementById('myname').innerHTML)
  }

  // 更新后可获得新的dom节点，两个参数分别是：老的属性，老的状态
  componentDidUpdate = (prevProps, prevState) => {
    console.log('componentDidUpdate', document.getElementById('myname').innerHTML)
    
    // 因为每次更新都会执行，所以会执行多次，需要进行判断
    // 在这里获取this.state获取到的是新的状态，如果想获取老的状态需要使用它的形参prevState
    if(prevState.list.length === 0 ) {
      new BScroll('.wrapper')
    }
    
  }
}
