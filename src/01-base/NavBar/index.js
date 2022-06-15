import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class Navbar extends Component {
  // 类属性
  static propsType = {
    title: propTypes.string,
    leftShow: propTypes.bool
  }
  static defaultProps = {
    title: '',
    leftShow: true
  }
  render() {
    let { title, leftShow } = this.props
    
    return (
      <div>
        { leftShow && <button>返回</button> }
        <span>Navbar-{title}</span>
        <button>侧边栏</button>
      </div>
    )
  }
}
