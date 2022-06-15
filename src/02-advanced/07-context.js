import React, { Component } from 'react'
import axios from 'axios'
import './css/05-statusBoost.css'

// 创建context
const GlobalContext = React.createContext()

class FilmItem extends Component {
  render() {
    let { name, poster, category, nation, synopsis } = this.props
    return (
      <GlobalContext.Consumer>
        {
          (value) => {
            return (
              <div className='item' onClick={() => {
                value.changeInfo(synopsis)
              }}>
                <img src={poster} />
                <div className='info'>
                  <p>{name}</p>
                  <p>{category}</p>
                  <p>{nation}</p>
                </div>
              </div>
            )
          }
        }
      </GlobalContext.Consumer>

    )
  }
}

class FilmData extends Component {

  render() {
    return (
      <GlobalContext.Consumer>
        {
          (value) => {
            return (
              <div className='filmData'>
                <p>{value.info}</p>
              </div>
            )
          }
        }
      </GlobalContext.Consumer>
    )
  }
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      info: ''
    }
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=6263511',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16523749951187425313357825","bc":"440300"}',
        'X-Host': 'mall.film-ticket.film.list'
      },
      method: 'get'
    }).then((res) => {
      console.log(res.data.data)
      this.setState({
        list: res.data.data.films
      })
    })
  }
  render() {
    return (
      <GlobalContext.Provider value={{
        call: '打电话',
        sms: '发短信',
        info: this.state.info,
        changeInfo:(value) => {
          this.setState({
            info: value
          })
        }
      }}>
        <div className='statusBoost'>
          <ul>
            {
              this.state.list.map(item => <FilmItem key={item.filmId} {...item}></FilmItem>)
            }
          </ul>
          <FilmData></FilmData>
        </div>
      </GlobalContext.Provider>

    )
  }
}
