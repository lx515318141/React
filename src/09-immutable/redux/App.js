import React, { Component } from 'react'
import Tabbar from './components/Tabbar'
import MRouter from './router/IndexRouter'
import './css/App.css'
import store from './redux/store'


export default class App extends Component {
  state = {
    show: store.getState().TabberReducer.get('show')
  }

  componentDidMount = () => {
    console.log(this.props, '123')

    console.log(store.getState().TabberReducer.get('show'), 'subscribe')
    this.setState({
      show: store.getState().TabberReducer.get('show')
    })

  }


  render() {
    return (
      <div>
        <MRouter>
          {this.state.show && <Tabbar></Tabbar>}
        </MRouter>
      </div>
    )
  }
}
