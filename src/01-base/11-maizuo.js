import React, { Component } from 'react'
import './css/11-maizuo.css'
import Film from './maizuoComponent/Film'
import Center from './maizuoComponent/Center'
import Cinema from './maizuoComponent/Cinema'
import News from './maizuoComponent/News'

export default class App extends Component {
  state = {
    tabList: [
      { id: 1, text: '电影' },
      { id: 2, text: '影院' },
      { id: 3, text: '资讯' },
      { id: 4, text: '我的' },
    ],
    currentTab: 0
  }
  showContent() {
    switch(this.state.currentTab) {
      case 0:
        return <Film></Film>;
      case 1:
        return <Cinema></Cinema>;
      case 2:
        return <News></News>;
      case 3:
        return <Center></Center>
    }
  }
  
  render() {
    return (
      <div>
        {
          this.showContent()
        }
        <ul className='tab'>
          {
            this.state.tabList.map((item, index) => <li key={item.id} className={ this.state.currentTab === index ? 'active' : '' } onClick={() => {
              this.tabHandler(index)
            }}>{item.text}</li>)
          }
        </ul>
      </div>
    )
  }
  tabHandler = (i) => {
    this.setState({
      currentTab: i
    })
  }
}
