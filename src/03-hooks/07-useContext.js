import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import './css/05-statusBoost.css'

// 创建context
const GlobalContext = React.createContext()

export default function App() {
  const [list, setList] = useState([])
  const [info, setInfo] = useState('')

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
      setList(res.data.data.films)
    })
  }, [])

  return (
    <GlobalContext.Provider value={{
      call: '打电话',
      sms: '发短信',
      info: info,
      changeInfo: (value) => {
        setInfo(value)
      }
    }}>
      <div className='statusBoost'>
        <ul>
          {
            list.map(item => <FilmItem key={item.filmId} {...item}></FilmItem>)
          }
        </ul>
        <FilmData></FilmData>
      </div>
    </GlobalContext.Provider>

  )
}

function FilmData() {
  const value = useContext(GlobalContext)

  return (
    <div className='filmData'>
      <p>{value.info}</p>
    </div>
  )
}

function FilmItem(props) {
  let { name, poster, category, nation, synopsis } = props
  const value = useContext(GlobalContext)

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
