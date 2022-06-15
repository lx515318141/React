import { fork, take, call, put, takeEvery } from 'redux-saga/effects'

// 转到sagaEvery
function *watchSaga1() {
  // while(true) {
  //   // take 监听组件发来的action
  //   yield take('get-list1')
  //   // fork 同步执行异步处理函数
  //   yield fork(getList1)
  // }

  // takeEvery写法
  yield takeEvery('get-list1', getList1)
}

function *getList1() {
  // 进行异步处理
  // call发生异步请求
  let res = yield call(getListAction1)

  // put函数发出新的action
  yield put({
    type: 'change-list1',
    payload: res
  })
}

// 获取数据的对象
function getListAction1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([111, 222, 333])
    }, 2000);
  })
}

export default watchSaga1
export {getList1}