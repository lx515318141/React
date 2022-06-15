import { fork, take, call, put, takeEvery } from 'redux-saga/effects'

// 转到sagaEvery
function *watchSaga2() {
  // while(true) {
  //   // take 监听组件发来的action
  //   yield take('get-list2')
  //   // fork 同步执行异步处理函数
  //   yield fork(getList2)
  // }

  // takeEvery写法
  yield takeEvery('get-list2', getList2)
}

function *getList2() {
  // 进行异步处理
  // call发生异步请求
  let res1 = yield call(getListAction2_1)
  let res2 = yield call(getListAction2_2, res1)

  // put函数发出新的action
  yield put({
    type: 'change-list2',
    payload: res2
  })
}

// 获取数据的对象
function getListAction2_1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([444, 555, 666])
    }, 2000);
  })
}

function getListAction2_2(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([...data, 777, 888, 999])
    }, 2000);
  })
}

export default watchSaga2
export {getList2}