import React, { Component } from 'react'

export default class Dialog extends Component {
  render() {
    return (
      <div style={{
          position: 'fixed',
          left: '0',
          top: '0',
          width: '100vw',
          height: '100vh',
          background: 'rgba(0, 0, 0, 0.6)',
          zIndex: 999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <div className='container' style={{ background: "#fff" }}>
          Dialog
        </div>
      </div>
    )
  }
}
