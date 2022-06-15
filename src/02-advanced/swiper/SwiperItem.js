import React, { Component } from 'react'

export default class SwiperItem extends Component {
  render() {
    return (
      <div className="swiper-slide" style={{ height: '100%' }}>
        { this.props.children }
      </div>
    )
  }
}
