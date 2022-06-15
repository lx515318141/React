import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

// 转到sagaEvery
function* watchSaga() {
  // while(true) {
  //   // take 监听组件发来的action
  //   yield take('get-list1')
  //   // fork 同步执行异步处理函数
  //   yield fork(getList1)
  // }

  // takeEvery写法
  yield takeEvery('get-ciname-list', getList)
}

function* getList() {
  // 进行异步处理
  // call发生异步请求
  let res = yield call(getListAction)
  console.log(res)
  // put函数发出新的action
  yield put({
    type: 'change-ciname-list',
    payload: res
  })
}

// 获取数据的对象
function getListAction() {
  return axios({
    url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=562387',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16523749951187425313357825","bc":"440300"}',
      'X-Host': 'mall.film-ticket.cinema.list'
    },
    method: 'get'
  }).then((res) => {
    return res.data.data.cinemas
  })
}

export default watchSaga