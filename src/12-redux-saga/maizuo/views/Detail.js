import React, { useEffect } from 'react'
import store from '../redux/store'
import { show, hide } from '../redux/actionCreator/TabbarActionCreator'

export default function Detail(props) {
  // 动态路由接收方式
  console.log(props.match.params.filmId, "detail")
  // query接收方式
  // console.log(props.location.query.filmId)
  // state接收方式
  // console.log(props.location.state.filmId)

  useEffect(() => {
    console.log('dispatch')
    // 如果dispatch中的逻辑不复杂的时候是不需要用到actionCreator的
    store.dispatch({
      type: 'hideTabbar'
    })
    // store.dispatch(hide())
    return () => {
      console.log('dispatch')
      store.dispatch({
        type: 'showTabbar'
      })
    }
  }, [props.match.params.filmId])

  return (
    <div>
      Detail
    </div>
  )
}
