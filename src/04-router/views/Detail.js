import React from 'react'

export default function Detail(props) {
  // 动态路由接收方式
  console.log(props.match.params.filmId)
  // query接收方式
  // console.log(props.location.query.filmId)
  // state接收方式
  // console.log(props.location.state.filmId)
  return (
    <div>
      Detail
    </div>
  )
}
