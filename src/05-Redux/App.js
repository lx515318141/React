import React, { Component } from 'react'
import Tabbar from './components/Tabbar'
import MRouter from './router/IndexRouter'
import './css/App.css'
import store from './redux/store'


export default class App extends Component {
  state = {
    show: store.getState().show
  }
  
  componentDidMount = () => {
    console.log(this.props, '123')
    store.subscribe(() => {
      console.log(store.getState().TabberReducer.show, 'subscribe')
      this.setState({
        show: store.getState().TabberReducer.show
      })
    })

  }
  

  render() {
    return (
      <div>
        <MRouter>
          { this.props.show && <Tabbar></Tabbar> }
        </MRouter>
      </div>
    )
  }
}
