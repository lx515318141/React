import { List, Map } from 'immutable'
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    info: Map({
      name: 'lx',
      location: Map(
        {
          provinec: '辽宁',
          city: '大连'
        }
      ),
      favor: List(['吃饭', '睡觉', '打豆豆']),
    })
  }
  render() {
    return (
      <div>
        {
          this.state.info.get('name')
        }-{
          this.state.info.get('location').get('provinec')
        }-{
          this.state.info.get('location').get('city')
        }
        <button onClick={() => {
          this.setState({
            info: this.state.info.set('name', 'xiaoming').set('location', this.state.info.get('location').set('city', '沈阳'))
          })
        }}>change</button>
        <p>爱好：</p>
        <ul>
          {
            this.state.info.get('favor').map((item, index) => <li key={item}>{item} <button onClick={() => {
              this.setState({
                info: this.state.info.set('favor', this.state.info.get('favor').splice(index, 1))
              })
            }}>del</button></li>)
          }
        </ul>
      </div>
    )
  }
}
