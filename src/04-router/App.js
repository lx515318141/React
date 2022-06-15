import React, { Component } from 'react'
import Tabbar from './components/Tabbar'
import MRouter from './router/IndexRouter'
import './css/App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <MRouter>
          <Tabbar></Tabbar>
        </MRouter>
      </div>
    )
  }
}
