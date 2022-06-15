import React, { PureComponent } from 'react'

// 使用PureComponent就不需要使用shouldComponentUpdate，react会自动对比setState时新老数据是否有变化
// 但是他有使用场景的限制，如果某一组件需要一直让其更新，例如计时器，每次setState都需要更新，但是react的对比是需要时间的，此时就会导致时间不准确
export default class App extends PureComponent {
  state = {
    myname: 'xiaoli',
  }
  render() {
    console.log('render')
    return (
      <div>
        <button onClick={() => {
          this.setState({
            myname: 'xiaozhang'
          })
        }}>click</button>
        <span>{this.state.myname}</span>
      </div>
    )
  }

  componentDidUpdate = () => {
    console.log('componentDidUpdate')
  }
}
