import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./14-Replenish/memo/App"
import 'antd/dist/antd.css'
import { store, persistor } from './08-antd-mobile/redux/store'
import { PersistGate } from 'redux-persist/lib/integration/react';


ReactDOM.render(
  // <Provider store={store}>
  //   <PersistGate loading={null} persistor={persistor}>
  //     <App />
  //   </PersistGate>
  // </Provider>
  <App />,
  document.getElementById('root'))