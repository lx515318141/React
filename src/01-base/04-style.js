/*
  组件的样式
*/
import React, { Component } from 'react'
import './css/04-style.css'

// 
// 在JSX中html标签的class应该写成className因为在JS中class是关键字，如果直接写class，会报错
// 同样的label标签的for也不能直接写，应该写成htmlFor
// label的for功能可以让id与for中相同的input标签，在点击label的时候input自动获取焦点
// 在JSX中使用注释也可以通过加大括号，大括号内就可以按照正常的JS来进行注释了
// react行内样式写法中带中划线的css属性需要写成驼峰命名如：background-color，应该写成backgroundColor
export default class App extends Component {
  render() {
    var myName = 'li'
    var obj = {
      background: 'red'
    }
    return (
      <div>
        {/* return中的div下大括号中的内容就是JS内容，可以接受变量，三元运算符，各类表达式，但不接受语句 */}
        { 10 + 20 } - { myName }
        { 10 > 20 ? 'aaa' : 'bbb' }
        <div style={obj}>111111111111111111</div>
        {/* React推荐我们使用行内样式，因为React觉得每一个组件都是一个独立的整体。 */}
        <div style={{ background: 'green' }}>222222222222222222</div>
        
        <div className='active'>333333333333333333</div>
        <div id='myApp'>444444444444444444</div>

        <label htmlFor='username'>用户名：</label>
        <input id='username' type="text"/>
      </div>
    )
  }
}
