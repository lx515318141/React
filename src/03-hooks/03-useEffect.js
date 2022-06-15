import React, {Component, useLayoutEffect, useEffect} from 'react'

function Child() {
  useEffect(() => {
    window.onresize = () => {
      console.log('onresize')
    }

    let timer = setInterval(() => {
      console.log('time')
    }, 1000)

    // 在这里进行销毁组件前的解除绑定等
    return () => {
      console.log('destory')
      clearInterval(timer)
      window.onresize = null
    }
  }, [])

  // useLayoutEffect会在dom树完成更新后立即执行，这样可能会导致阻塞页面渲染
  // useEffect会在渲染树完成更新后再执行，这样就不会导致页面渲染阻塞
  // 但是如果在useEffect进行纯dom操作，建议在useLayoutEffect中进行，如果在useEffect可能会导致页面抖动
  // useLayoutEffect中进行dom操作会和react做出的更改一同渲染到页面，只要一次重绘、回流。而在useEffect进行dom操作可能会导致多次重绘、回流
  // useLayoutEffect(() => {
  //   window.onresize = () => {
  //     console.log('onresize')
  //   }

  //   let timer = setInterval(() => {
  //     console.log('time')
  //   }, 1000)

  //   return () => {
  //     console.log('destory')
  //     clearInterval(timer)
  //     window.onresize = null
  //   }
  // }, [])

  return (
    <div>
      child
    </div>
  )
}

export default class App extends Component {
  state = {
    isShow: true
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            isShow: !this.state.isShow
          })
        }}>click</button>
        {this.state.isShow && <Child></Child>}
      </div>
    )
  }
}