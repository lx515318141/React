import React from 'react'
import propTypes from 'prop-types'

export default function Sidebar(props) {
  let { bg, position } = props
  let obj = {
    background: bg, position: 'fixed'
  }
  let objl = {
    left: 0
  }
  let objr = {
    right: 0
  }
  let styleObj = position === 'left' ? {...obj, ...objl} : {...obj, ...objr}
  return (
    <div>
      <ul style={styleObj}>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
      </ul>
    </div>
  )
}
// 在函数式组件中要想验证属性和设置默认属性，只能使用原始写法
// Sidebar.propTypes = {
//   bg: propTypes.string,
//   position: propTypes.string
// }

// Sidebar.defaultProps = {
//   bg: '',
//   position: 'left'
// }