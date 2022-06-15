import React, { useEffect, useState, useContext, useReducer } from 'react'
import axios from 'axios'
import './css/05-statusBoost.css'

// 创建context
const GlobalContext = React.createContext()

const reducer = (prevState, action) => {
  let newState = { ...prevState }
  switch (action.type) {
    case 'setList':
      newState.list = action.value
      return newState;
    case 'changeInfo':
      newState.info = action.value
      return newState;
    default:
      return prevState;
  }
}

const intialState = {
  list: [],
  info: ''
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, intialState)

  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=6263511',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16523749951187425313357825","bc":"440300"}',
        'X-Host': 'mall.film-ticket.film.list'
      },
      method: 'get'
    }).then((res) => {
      console.log(res.data.data)
      dispatch({
        type: 'setList',
        value: res.data.data.films
      })
    })
  }, [])

  return (
    <GlobalContext.Provider value={{
      state,
      dispatch
    }}>
      <div className='statusBoost'>
        <ul>
          {
            state.list.map(item => <FilmItem key={item.filmId} {...item}></FilmItem>)
          }
        </ul>
        <FilmData></FilmData>
      </div>
    </GlobalContext.Provider>

  )
}

function FilmData() {
  const { state } = useContext(GlobalContext)

  return (
    <div className='filmData'>
      <p>{state.info}</p>
    </div>
  )
}

function FilmItem(props) {
  let { name, poster, category, nation, synopsis } = props
  const { dispatch } = useContext(GlobalContext)

  return (
    <div className='item' onClick={() => {
      dispatch({
        type: 'changeInfo',
        value: synopsis
      })
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
