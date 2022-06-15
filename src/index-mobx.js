import React from "react";
import ReactDOM from "react-dom";
import App from "./10-mobx/04-router/App"
import store from './10-mobx/04-router/mobx/store'
import { Provider } from 'mobx-react'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root'))