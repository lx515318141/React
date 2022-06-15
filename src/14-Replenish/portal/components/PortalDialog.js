import React, { Component } from 'react'
import { createPortal } from 'react-dom'


export default class PortalDialog extends Component {
  render() {
    return createPortal(
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
          {this.props.children}
          <button onClick={ this.props.onClose }>close</button>
        </div>
      </div>,
      document.body
    )
  }
}
