import React, { useEffect } from 'react'
import store from '../redux/store'
import { show, hide } from '../redux/actionCreator/TabbarActionCreator'
import { connect } from 'react-redux'

function Detail(props) {
  // 动态路由接收方式
  console.log(props.match.params.filmId, "detail")
  // query接收方式
  // console.log(props.location.query.filmId)
  // state接收方式
  // console.log(props.location.state.filmId)

  let { show, hide, match } = props
  console.log(show)
  useEffect(() => {
    console.log('hide')
    // 如果dispatch中的逻辑不复杂的时候是不需要用到actionCreator的
    hide()
    // store.dispatch(hide())
    return () => {
      console.log('show')
      show()
    }
  }, [match.params.filmId, show, hide])

  return (
    <div>
      Detail
    </div>
  )
}

const mapDispatchToProps = {
  show,
  hide
}
export default connect(null, mapDispatchToProps)(Detail)