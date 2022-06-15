import React, { Component } from 'react'
import Tabbar from './components/Tabbar'
import MRouter from './router/IndexRouter'
import './css/App.css'
import store from './mobx/store'
import { autorun } from 'mobx'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class App extends Component {
  // state = {
  //   isShow: false
  // }

  componentDidMount = () => {
    // autorun(() => {
    //   console.log(store.isTabberShow)
    //   this.setState({
    //     isShow: store.isTabberShow
    //   })
    // })
  }
  

  render() {
    return (
      <div>
        <MRouter>
          {
            this.props.store.isTabberShow && <Tabbar></Tabbar>
          }
        </MRouter>
      </div>
    )
  }
}

export default App