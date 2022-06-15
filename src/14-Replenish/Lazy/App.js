import React, { Component, Suspense } from 'react'
// import NowPlaying from './components/NowPlaying'
// import ComingSoon from './components/ComingSoon'

const NowPlaying = React.lazy(() => import('./components/NowPlaying'))
const ComingSoon = React.lazy(() => import('./components/ComingSoon'))
export default class App extends Component {
  state = {
    type: 1
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            type: 1
          })
        }}>正在热映</button>
        <button onClick={() => {
          this.setState({
            type: 2
          })
        }}>即将上映</button>
        <Suspense fallback={<div>正在加载中...</div>}>
          {
            this.state.type === 1 ?
              <NowPlaying></NowPlaying>
              :
              <ComingSoon></ComingSoon>
          }
        </Suspense>

      </div>
    )
  }
}



