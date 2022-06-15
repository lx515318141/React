import axios from "axios";
import { Toast } from 'antd-mobile'

axios.interceptors.request.use(function (config) {
  Toast.show({
    icon: 'loading',
    content: '加载中…',
    duration: 0
  })

  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  setTimeout(() => {
    Toast.clear()
  }, 600);
  return response
}, function (error) {
  setTimeout(() => {
    Toast.clear()
  }, 300);
  return Promise.reject(error)
})