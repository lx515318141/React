import { takeEvery } from 'redux-saga/effects'
import watchSaga1, { getList1 } from './saga/saga1'
import watchSaga2, { getList2 } from './saga/saga2'

function *watchSaga() {
  yield takeEvery('get-list1', getList1)
  yield takeEvery('get-list1', getList2)
}

export default watchSaga