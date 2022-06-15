import { List } from 'immutable'
import React, { Component } from 'react'

var arr = List([1, 2, 3])
var arr1 = arr.push(4)
var arr2 = arr1.concat([5, 6, 7])

console.log(arr, arr1, arr2)
console.log(arr.toJS(), arr1.toJS(), arr2.toJS())


export default class App extends Component {
  state = {
    favor: List(['aaa', 'bbb', 'ccc'])
  }
  render() {
    return (
      <div>
        {
          this.state.favor.map(item => <li key={item}>{item}</li>)
        }
      </div>
    )
  }
}
