import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, withRouter } from 'react-router-dom'

export default function NowPlaying(props) {
  const [list, setList] = useState([])

  useEffect(() => {
    getList(1)
  }, [])

  const getList = (type) => {
    axios({
      url: `https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=${type}&k=6263511`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16523749951187425313357825","bc":"440300"}',
        'X-Host': 'mall.film-ticket.film.list'
      },
      method: 'get'
    }).then((res) => {
      console.log(res.data.data)
      setList(res.data.data.films)
    })
  }

  // react-router专门给hooks封装的方法
  const history = useHistory()

  const changePageHandler = (id) => {
    // JS原生操作
    // window.location.href = `#/detail/${id}`

    console.log(props)

    // 1.动态路由传参
    // react-router提供的方法
    // props.history.push(`/detail/${id}`)
    // react-router专门为hooks提供的方法
    history.push(`/detail/${id}`)

    // 2.query传参
    // history.push({ pathname: '/detail', query: { filmId: id } })

    // 3.state传参
    // history.push({ pathname: '/detail', state: { filmId: id } })
  }

  return (
    <div>
      {
        /*
        <ul>
        {
          list.map(item => <li key={item.filmId} onClick={() => changePageHandler(item.filmId)}>
            {// 使用NAVLink}
            {// <NavLink to={'/detail/' + item.filmId}>{item.name}</NavLink>}
            {item.name}
          </li>)
        }
      </ul>
        */
      }
      <ul>
        {
          list.map(item => <WithFilmItem key={item.filmId} {...item}></WithFilmItem>)
        }
      </ul>
    </div>
  )
}

function FilmItem(props) {
  let { name, filmId } = props

  return (
    <li onClick={() => {
      // 此时因为FilmItem不是Route的子组件，props依然没有history等方法
      // 如果想使用可以使用center中的方法，从NowPalying中传入props
      // 也可以使用withRouter
      props.history.push(`/detail/${filmId}`)
    }}>
      {/* 使用NAVLink */}
      {/* <NavLink to={'/detail/' + item.filmId}>{item.name}</NavLink> */}
      {name}
    </li>
  )
}

const WithFilmItem = withRouter(FilmItem)