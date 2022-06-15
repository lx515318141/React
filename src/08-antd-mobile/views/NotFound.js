import React from 'react'

function NotFound(props) {
  console.log(props)
  return (
    <div>
      404 NotFound
    </div>
  )
}

// 高阶组件封装
function lxConnect(fun, obj) {
  let value = fun()
  return (NotFound) => {
    // lxConnect执行后返回一个箭头函数，调用时后面加了一个括号，此时，返回的箭头函数会继续执行
    // 所以此时NotFound组件返回的是下面这个箭头函数，所以在这个箭头函数理可以获取到Router传递过来的props
    return (props) => {
      return <div style={{ color: 'red' }}>
        <NotFound {...value} {...props} {...obj} ></NotFound>
      </div>
    }
  }
}

export default lxConnect(() => {
  return {
    a: 1,
    b:2
  }
}, {
  aa() {},
  bb() {}
})(NotFound)