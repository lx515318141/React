// 1.引入redux
// 2.creatStore(reducer)

// creatStore已被弃用
/*
  我们推荐使用 @reduxjs/toolkit 包的 configureStore 方法，它取代了 createStore。
  Redux Toolkit 是我们推荐的当今编写 Redux 逻辑的方法，包括存储设置、reducers、数据获取等。
  有关更多详细信息，请阅读此 Redux 文档页面：https://redux.js.org/introduction/why-rtk-is-redux-today
  Redux Toolkit 中的 configureStore 是 createStore 的改进版本，它简化了设置并有助于避免常见错误。
  你今天不应该单独使用 redux 核心包，除非是为了学习目的。 核心 redux 包中的 createStore 方法不会被删除，但我们鼓励所有用户迁移到对所有 Redux 代码使用 Redux Toolkit。
  如果您想在没有此视觉弃用警告的情况下使用 createStore，请改用 legacy_createStore 导入：
  从“redux”导入 { legacy_createStore as createStore}
*/
import { applyMiddleware, combineReducers, legacy_createStore as createStore, compose } from 'redux'
import TabberReducer from './reducers/TabbarReducer';
import CityReducer from './reducers/CityReducer';
import CinemaListReducer from './reducers/CinemaListReducer';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise'
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'lix',
  storage,
  // 白名单whitelist黑名单blacklist，如果写了白名单，只有写在白名单内的reducer就会持久化，如果写了黑名单，那么只有写在黑名单内的reducer不会被持久化
  whitelist: ['CityReducer'],
  // stateReconciler: autoMergeLevel2
  //控制在本地存储中，新老状态怎么合并，覆盖？或者合并？
};

const reducer = combineReducers({ TabberReducer, CityReducer, CinemaListReducer })

const myPersistReducer = persistReducer(persistConfig, reducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(myPersistReducer, composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)))

const persistor = persistStore(store)

export { store, persistor };







// 手写简易版createStore
// function lxcreateStore(reducer) {
//   let list = []
//   let state = reducer(undefined, {})

//   function dispatch(action) {
//     state = reducer(state, action)
//     for (let i in list) {
//       list[i] && list[i]()
//     }
//   }

//   function subscribe(callback) {
//     list.push(callback)
//   }

//   function getState() {
//     return state
//   }

//   return {
//     dispatch,
//     subscribe,
//     getState
//   }
// }
