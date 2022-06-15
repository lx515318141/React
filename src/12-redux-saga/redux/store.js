import { applyMiddleware, legacy_createStore as createStore, compose } from 'redux'
import reducer from './reducer';
import createSagaMiddleware from '@redux-saga/core';
import watchSaga from './sage-every';

const SagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(SagaMiddleware))

SagaMiddleware.run(watchSaga)  // saga监听者
export default store;