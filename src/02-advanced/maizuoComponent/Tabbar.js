import React, { Component } from 'react'
import '../css/02-maizuo.css'

// class组件
// export default class Tabbar extends Component {
//   render() {
//     let {currentTab} = this.props
//     return (
//       <div>
//         <ul className='tab'>
//           {
//             this.props.list.map((item, index) => <li key={item.id} className={ currentTab === index ? 'active' : '' } onClick={() => {
//               this.tabHandler(index)
//             }}>{item.text}</li>)
//           }
//         </ul>
//       </div>
//     )
//   }
//   tabHandler = (i) => {
//     this.props.myEvent(i)
//   }
// }


// 函数式组件
const Tabbar = (props) => {
  // 函数式内部的函数
  // function tabHandler(i) {
  //   props.myEvent(i)
  // }
  return (
    <div>
      {/* <ul className='tab'>
        {
          props.list.map((item, index) => <li key={item.id} className={ props.currentTab === index ? 'active' : '' } onClick={() => {
            tabHandler(index)
          }}>{item.text}</li>)
        }
      </ul> */}
      {/* 精简版可不需要调用内部函数 */}
      <ul className='tab'>
        {
          props.list.map((item, index) => <li key={item.id} className={props.currentTab === index ? 'active' : ''} onClick={() => props.myEvent(index)}>{item.text}</li>)
        }
      </ul>
    </div>
  )
}

export default Tabbar;