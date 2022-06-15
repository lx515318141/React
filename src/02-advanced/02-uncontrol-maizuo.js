import React, { Component } from 'react'
import './css/02-maizuo.css'
import Film from './maizuoComponent/Film'
import Center from './maizuoComponent/Center'
import Cinema from './maizuoComponent/Cinema'
import News from './maizuoComponent/News'
import Tabbar from './maizuoComponent/Tabbar'
import Navbar from './maizuoComponent/Navbar'

export default class App extends Component {
  state = {
    list: [
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
  goCenterHandler = () => {
    this.setState({
      currentTab: 3
    })
  }
  changeCurrent = (index) => [
    this.setState({
      currentTab: index
    })
  ]
  render() {
    return (
      <div>
        <Navbar myEvent={this.goCenterHandler}></Navbar>
        {
          this.showContent()
        }
        <Tabbar currentTab={this.state.currentTab} list={this.state.list} myEvent={this.changeCurrent}></Tabbar>
      </div>
    )
  }
}
