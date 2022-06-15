import React, { Component } from 'react'
import Tabbar from './components/Tabbar'
import MRouter from './router/IndexRouter'
import './css/App.css'
import { connect } from 'react-redux'


class App extends Component {

  
  componentDidMount = () => {}
  

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

const mapStateToProps = (state) => {
  return {
    show: state.TabberReducer.show
  }
}
export default connect(mapStateToProps)(App)