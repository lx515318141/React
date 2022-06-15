import React, { useEffect } from 'react'
import store from '../mobx/store'

export default function Detail(props) {
  // 动态路由接收方式
  console.log(props.match.params.filmId)

  useEffect(() => {
    // store.isTabberShow = false
    store.changeHide()
    return () => {
      // store.isTabberShow = true
      store.changeShow()
    }
  }, [])
  return (
    <div>
      Detail
    </div>
  )
}
