import axios from 'axios'

// redux-thunk
// function getCinemaListActionCreator() {
//   return (dispatch) => {
//     axios({
//       url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=562387',
//       headers: {
//         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16523749951187425313357825","bc":"440300"}',
//         'X-Host': 'mall.film-ticket.cinema.list'
//       },
//       method: 'get'
//     }).then((res) => {
//       dispatch({
//         type: 'changeList',
//         payload: res.data.data.cinemas
//       })
//     })
//   }
// }

// redux-promise
// function getCinemaListActionCreator() {
//   return axios({
//     url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=562387',
//     headers: {
//       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16523749951187425313357825","bc":"440300"}',
//       'X-Host': 'mall.film-ticket.cinema.list'
//     },
//     method: 'get'
//   }).then((res) => {
//     return {
//       type: 'changeList',
//       payload: res.data.data.cinemas
//     }
//   })
// }

// redux-promise async写法
async function getCinemaListActionCreator() {
  let list = await axios({
    url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=562387',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16523749951187425313357825","bc":"440300"}',
      'X-Host': 'mall.film-ticket.cinema.list'
    },
    method: 'get'
  }).then((res) => {
    return {
      type: 'changeList',
      payload: res.data.data.cinemas
    }
  })

  return list
}

export default getCinemaListActionCreator;