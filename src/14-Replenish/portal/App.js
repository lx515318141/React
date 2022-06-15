import React, { Component } from 'react'
import Dialog from './components/Dialog'
import './App.css'
import PortalDialog from './components/PortalDialog'

export default class App extends Component {
  state = {
    isshow: false
  }
  render() {
    return (
      <div className='home' onClick={() => {
        console.log('冒泡情况依然存在')
      }}>
        <div className='left'></div>
        {/* 单纯使用display: fixed;如果Dialog的父节点right和left都进行了position: relative;，且left的z-index高于right，此时不管Dialog的z-index有多高都遮不住left，此时就需要引入portal */}
        <div className='right'>
          <button onClick={() => {
            this.setState({
              isshow: true
            })
          }}>显示dialog</button>
          {
            // this.state.isshow && <Dialog></Dialog>
            this.state.isshow && <PortalDialog onClose={() => {
              this.setState({
                isshow: false
              })
            }}>
              <h1>标题</h1>
            </PortalDialog>
          }
        </div>
      </div>
    )
  }
}
