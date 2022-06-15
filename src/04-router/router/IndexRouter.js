import React from 'react'
// 使用as可以将HashRouter重命名
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import NotFound from '../views/NotFound'
import Detail from '../views/Detail'
import Login from '../views/Login'

// 如果将HashRouter换成BrowserRouter就是没有#号的路径，更美观
// 当时它会真正朝后端发请求要页面，如果后端没有对应的路径处理逻辑，就会404
// 此时可以和后端沟通，如果浏览器向其发起获取页面请求，但是没有该页面是404，后端重新渲染index.html即可
export default function IndexRouter(props) {
  const isAuth = () => {
    return localStorage.getItem('token')
  }

  return (
    <div>
      <Router>
        {props.children}
        <Switch>
          <Route path="/films" component={Films} />
          
          <Route path="/cinemas" component={Cinemas} />

          {/* 此时center组件并不是Route的子组件 */}
          {/* 如果想在center中使用Route组件传递的props中的history等功能或参数，可以做render的参数中传入props再传递给center */}
          {/* <Route path="/center" render={(props) => {
            return isAuth() ? <Center {...props}/> : <Redirect to='/login'></Redirect>
          }} /> */}

          {/* 也可以使用withRouter */}
          <Route path="/center" render={() => {
            return isAuth() ? <Center /> : <Redirect to='/login'></Redirect>
          }} />

          <Route path='/login' component={Login}></Route>

          {/* 动态路由，传参方式 */}
          <Route path="/detail/:filmId" component={Detail}></Route>

          {/* 非动态路由也可以传参 */}
          {/* <Route path="/detail" component={Detail}></Route> */}
          
          {/* from='/'是模糊搜索，此时只要路径中带/都会转到/films，加上exact就会变成精确搜索，当路径中只有/时才会转到films */}
          <Redirect from='/' to='/films' exact></Redirect>
          {/* 当路径和以上都不匹配的时候就会找到NotFound */}
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  )
}
