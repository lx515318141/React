import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useHistory, withRouter } from 'react-router-dom'
import { List, Image, InfiniteScroll } from 'antd-mobile'

export default function NowPlaying(props) {
  const [list, setList] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const count = useRef(0)

  // useEffect(() => {
  //   getList(1)
  // }, [])

  function loadMore() {
    count.current++
    setHasMore(false)
    getList(count.current)
  }

  const getList = (page) => {
    axios({
      url: `https://m.maizuo.com/gateway?cityId=440300&pageNum=${page}&pageSize=10&type=1&k=6263511`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16523749951187425313357825","bc":"440300"}',
        'X-Host': 'mall.film-ticket.film.list'
      },
      method: 'get'
    }).then((res) => {
      // console.log(res.data.data)
      setList([...list, ...res.data.data.films])
      setHasMore(res.data.data.films.length > 0)
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
      <List>
        {list.map(item => (
          <List.Item
            key={item.filmId}
            prefix={
              <Image
                src={item.poster}
                fit='cover'
                width={66}
              />
            }
            description={
              <div>
                {item.grade ? <p style={{ marginBottom: '4px' }}>观众评分：{item.grade}</p> : <p style={{ marginBottom: '4px', visibility: 'hidden' }}>观众评分：{item.grade}</p>}
                <p style={{ marginBottom: '4px' }}>主演：{item.director}</p>
                <p style={{ marginBottom: '4px' }}>{item.nation}|{item.runtime}分钟</p>
              </div>
            }
            onClick={() => {
              changePageHandler(item.filmId)
            }}
          >
            {item.name}
          </List.Item >
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </div>
  )
}
