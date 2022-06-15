import React, { Component } from 'react'
import { Map } from 'immutable'
// 使用方法分为两种
// 1.将状态通过Map转化后，通过get获取，通过set修改
var obj = {
  name: 'lx',
  age: 10
}
var oldObj = Map(obj)
var newObj = oldObj.set("name", 'xiaoming')
console.log(oldObj, newObj)
console.log(oldObj.get('name'), newObj.get('name'))

// 2.正常使用状态，但是在修改的时候通过Map将其转化，然后进行修改，修改后再通过Map将其转化回去
console.log(oldObj.toJS(), newObj.toJS())

// export default class App extends Component {
//   state = {
//     info: Map({
//       name: 'xiaoming',
//       age: 10
//     })
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={() => {
//           this.setState({
//             info: this.state.info.set('name', 'xiaoli').set('age', 30)
//           })
//         }}>Change</button>
//         {this.state.info.get('name')}--{this.state.info.get('age')}
//       </div>
//     )
//   }
// }

export default class App extends Component {
  state = {
    info: {
      name: 'xiaoming',
      age: 10
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => {
          let oldInfo = Map(this.state.info)
          let newInfo = oldInfo.set('name', 'xiaoli').set('age', 30)
          console.log(newInfo.toJS())
          this.setState({
            info: newInfo.toJS()
          })
        }}>Change</button>
        {this.state.info.name}--{this.state.info.age}
      </div>
    )
  }
}
