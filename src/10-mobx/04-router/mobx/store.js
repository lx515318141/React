import { action, configure, observable, runInAction } from "mobx";
import axios from 'axios'

configure({
  enforceActions: "always"
})

// const store = observable({
//   isTabberShow: true,
//   list: [],
//   cityName: '北京',
//   changeShow() {
//     this.isTabberShow = true
//   },
//   changeHide() {
//     this.isTabberShow = false
//   }
// }, {
//   // 标记两个方法是action，专门用来修改可观测值的value
//   changeHide: action,
//   changeShow: action
// })

class Store {
  @observable isTabberShow = true;
  @observable list = [];
  @observable cityName = '北京';

  @action changeShow() {
    this.isTabberShow = true
  }

  @action changeHide() {
    this.isTabberShow = false
  }

  @action async getList() {
    let list = await axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=562387',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16523749951187425313357825","bc":"440300"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      },
      method: 'get'
    }).then((res) => {
      return res.data.data.cinemas
    })
  
    runInAction(() => {
      this.list = list
    })
  }
}

let store = new Store()

export default store