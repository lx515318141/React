import { autorun, observable } from 'mobx'
import React, { Component } from 'react'


const observableNum = observable.box(10)
const observableName = observable.box('xiaoming')
var myObj = observable({
  name: 'xiaoming',
  age: 10
})

// autorun初始时会自动执行一次，之后每次改变observable的值都会执行
// 且只有autorun中的observable值改变才会执行，其他不相关的改变不会触发
autorun(() => {
  console.log(observableNum.get(), 'num')
})

autorun(() => {
  console.log(observableName.get(), 'name')
})

autorun(() => {
  console.log(myObj.name, 'obj')
})

setTimeout(() => {
  observableNum.set(20)
}, 1000);

setTimeout(() => {
  observableName.set('xiaohuang')
}, 2000);

setTimeout(() => {
  // 如果只修改对象中的age，则上面监听对象中的name的autorun不会执行
  // myObj.age = 100
  myObj.name = 'xiaohong'
}, 3000);

export default class App extends Component {
  render() {
    return (
      <div>
        App
      </div>
    )
  }
}
