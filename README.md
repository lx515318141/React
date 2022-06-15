# React
## 一、React简介
### 1.为什么学习React
因为React有很多优点，例如：  
1.声明式设计  
2.高效灵活  
3.组件化开发  
4.单项数据流  
5.虚拟dom提供性能  
最根本的原因是公司要用。  

### 2.React起源与发展
React起源于Facebook的内部项目，与2013年5月份开源。  

### 3.React与传统MVC的关系
React是轻量级的视图层库。  
React不是一个完整的MVC框架，最多可以认为是MVC中的V（View），甚至React并不认可传统的MVC开发模式，React构建页面UI的库。可以简单理解为，React将页面分解成各个独立的小块，每一块就是组件，这些组件之间可以组合嵌套，就成为了我们的页面。

### 4.React的特性
1.声明式设计﹣ React 采用声明范式，可以轻松描述应用。  
2.高效﹣ React 通过对 DOM 的模拟（虚拟 dom )，最大限度地减少与 DOM 的交互。  
3.灵活﹣ React 可以与已知的库或框架很好地配合。  
4.JSX- JSX 是 JavaScript 语法的扩展。  
5.组件一通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项自的开发中。  
6.单向响应的数据流﹣ React 实现了单向响应的数据流，从而减少少了重复代码，这也是它为什么比传统数据绑定更简单。  

### 5.虚拟DOM
1.传统DOM更新：  
真实页面对应一个DOM树，在传统页面开发模式中，每次需要更新页面时，都要手动操作DOM来进行更新。  

2.虚拟DOM  
DOM操作非常昂贵，我们都知道在前端开发中，性能消耗最大的就是DOM操作，而且这部分代码会让整体项目的代码变得难以维护。React把真实DOM树转换成JavaScript对象树，也就是Virtual树。  

## 二、React基础
### 1.create-react-app
全局安装 create-react-app  
`npm instal1- g create - react - app `  
创建一个项目  
```
create-react-app your-app  #注意命名方式

Creating a new React app in / dir / your - app .

Insta11ing packages . This might take a couple of minutes． #安装过程较慢
Insta11ing reaCt, react-dom, and react-scripts...
```
如果不想全局安装，可以直接使用npx  
`npX create-react-app your-app`  
也可以实现相同的效果  

这需要等待一段时间，这个过程实际上会安装三个东西  
react: react的顶级库  
react-dom：因为react有很多的运行环境，比如app端的react-native，我们要在Web上运行就使用react-dom  
react-scripts：包含运行和打包react应用程序的所有脚本及配置
出现以下提示表示安装成功
```
Success! Created my-app at D:\lixiang\Web\React\Code\my-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd my-app
  npm start

Happy hacking!
```
根据提示进入新建项目的目录并运行`npm start`就可以启动项目了。
生成项目的目录结构如下：
README.md              使用方法的文档  
node_modules           所有依赖安装的目录  
package-lock.json      可以锁定安装时的依赖包的小版本号，及安装路径，保证团队的依赖能保持一致  
package.json           只能锁定依赖包的大版本号
public                 静态公共目录  
src                    开发用的源代码目录  

常见问题：
1.npm安装失败:
切换为npm镜像为淘宝镜像  
使用yarn，如果本来使用yarn还是失败，还得把yarn的源切换到国内  

2.npm start启动失败：  
请册除node _ modules及package-lock.json然后重新执行npm insta11命令  
再不能解决就刪除node _ modules及package-lock.json的同时清除npm缓存npm cache clean -- force之后再执行npm install命令   

小知识：切换淘宝镜像  
全局安装nrm`npm i -g nrm`，nrm是npm包的仓库的管理软件，`nrm ls`可以查看当前npm连接的是那个库。如下：
```
 *npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/
```
运行`nrm use taobao`就可以将当前链接的仓库切换为淘宝镜仓库了。

### 2.JSX语法与组件
#### 2.1 编写第一个react应用程序
react开发需要引入多个依赖文件：react.js、react-dom.js，分别又有开发版本和生产版本，create-react-app里已经帮我们把这些东西都安装好了。把通过CRA创建的工程目录下的src目录清空，然后在里面重新创建一个index.js写入以下代码：  
```
// 从react的包当中引入了React。只要你要写React.js组件就必须引入React，因为react里有一种语法叫SX，稍后会讲到SX，要写SX，就必须引入React 
 import React from 'react'
// ReactDOM可以帮助我们把React组件治染到页面上去，没有其它的作用了。它是从react-dom中引入的，而不是从react引入。
 import ReactDOM from 'react-dom'
// ReactDOM里有一个render方法，功能就是把组件谊染并且构造DOM树，然后插入到页面上某个特定的元素上
ReactDOM.render (
// 这里就比较奇怪了，它并不是一个字符串，沿起来像是纯HTML代码写在JavaScript代码里面。语法错误吗？这并不是合法的JavaScript代码，＂在JavaScript写的标签的＂语法叫JSX-JavaScript XML。
 <h1>欢迎进入 React 的世界＜/h1>,
// 渲染到哪里
 document . getElementById (' root )
)
```

#### 2.2 JSX语法
JSX将HTML语法直接加入到JavaScript代码中，再通过翻译器转换到纯JavaScript后由浏览器执行。在实际开发中，JSX在产品打包阶段都已经编译成纯JavaScript，不会带来任何副作用，反而会让代码更加直观并易于维护。编译过程由Babel的JSX编译器实现。  

原理是什么呢？  
要明白JSX的原理，需要先明白如何用JavaScript对象来表现一个DOM元素的结构？看下面的DOM结构  
```
<div class='app＇id='appRoot'>
  <h1 class='title'>欢迎进入React的世界</h1>
  <p2>
  React.js是一个帮助你构建页面UI的库
  </p>
</div>
```
上面这个HTML所有的信息我们都可以用JavaScript对象来表示：  
```
{
  tag: 'div',
  attrs: { clasSName: 'app', id: 'appRoot' },
  chi1dren: [
    {
      tag: 'h1',
      attrs: { clasSName: 'title' },
      children: ['欢迎进入 React 的世界'］
    },
    {
      tag: 'p',
      attrs: nul1,
      chi1dren: ['React.js是一个构建页面UI的库'］
    },
  ]
}
```
但是用JavaScript写起来太长了，结构看起来又不清晰，用HTML的方式写起来就方便很多了。  
于是React.js就把JavaScript的语法扩展了一下，让JavaScript语言能够支持这种直接在JavaScript代码里面编写类似HTML标签结构的语法，这样写起来就方便很多了。编译的过程会把类似 HTML的JSX结构转换成JavaScript 的对象结构。下面代码：
```
import React from 'react'
import ReactDOM from 'react-dom'
class App extends React.Component {
  render() {
    return (
      <div className='app' id='appRoot'>
        <h1 className='title'>欢迎进入React的世界</h1>
        <p>
          React.js是一个构建页面UI的库
        </p>
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
document.getElementById('root')
）
```
编译之后将得到这样的代码
```
import React from 'react'
import ReactDOM from 'react-dom'
class App extends React.component{
  render() {
    return (
      React.createElement(
        "div",
        {
          className: 'app',
          id: 'appRoot'
        },
        
        React .crefeE1ement(
          "h1",
          { className: 'title' },
          "欢迎进入 React 的世界"
        ),

        React . createElement (
          "p",
          null,
          "React.js是一个构建页面UI的库"
        )
      )
    )
  }
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
)

```
React.createElement会构建一个JavaScript对象来描述你HTML结构的信息，包括标签名、属性、还有子元素等，语法为  
```
React.createElement(
  type ,
  [props],
  [...chi1dren]
)
```
所谓的JSX其实就是JavaScript对象，所以使用React和jSX的时候一定要经过编译的过程：
JSX - 使用react构造组件， bable进行编译 -> JavaScript对象 - ReactDOM.renderO -> DOM 元素->插入页面

#### 2.3 Class组件
ES6的加入让 avaScript 直接支持使用 clasS 来定义一个类， react 创建组件的方式就是使用的类的继承，ES6 class 是目前官方推荐的使用方式，它使用了ES6标准语法来构建，看以下代码：
```
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.component {
  render () {
    return (
      <h1>欢迎进入React的世界</h1>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
```
es6 class组件其实就是一个构造器，每次使用组件都相当于在实例化组件，像这样：
```
import React from 'react'
import ReactDOM from 'react-dom'
class App extends React.Component {
  render () {
    return (
      <h1>欢迎进入{this.props.name}的世界</h1>
    )
  }
}
const app = new App({
    name: 'react'
}).render()
ReactDOM.render(
  app,
  document.getElementById('root')
)
```

#### 2.4 组件的样式
1.行内样式
想给虚拟dom添加行内样式，需要使用表达式传入样式对象的方式来实现：
```
// 注意这里的两个括号，第一个表示我们在要JSX里插入JS了，第二个是对象的括号
// react行内样式写法中带中划线的css属性需要写成驼峰命名如：font-size，应该写成fontSize
<p style={{color:'red', fontSize:'14px'}}>Hello world</p>
```
行内样式需要写入一个样式对象，而这个样式对象的位置可以放在很多地方，例如 render 函数里、组件原型上、外链js文件中，如
```
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
      </div>
    )
  }
```
2.使用 class
React推荐我们使用行内样式，因为React觉得每一个组件都是一个独立的整体。其实我们大多数情况下还是大量的在为元素添加类名，但是需要注意的是， class需要写成className（因为毕竟是在写类js代码，会收到js规则的限制，而class是关键字）
```
<p className="hello">Hello World</p>
```
>注意：class ==> className , for ==> htmlFor(label)

#### 2.5 事件处理
1、绑定事件  
采用on+事件名的方式来绑定一个事件，注意，这里和原生的事件是有区别的，原生的事件全是小写onclick , React里的事件是驼峰 onClick ，React的事件并不是原生事件，而是合成事件。  

2、事件handler的写法  
直接在render里写行内的箭头函数(不推荐)  
```
<button onClick={() => {
  console.log('click1')
}}>add1</button>
```
在组件内使用箭头函数定义一个方法(推荐)  
```
render() {
  return (
    <div>
      <button onClick={this.clickAdd3}>add3</button>
    </div>
  )
}
clickAdd3 = () => {
  console.log('click3')
}
```
直接在组件内定义一个非箭头函数的方法，然后在render里直接使用 onClick={this.handleClick.bind(this)} (不推荐)  
```
render() {
  return (
    <div>
      <button onClick={this.clickAdd2}>add2</button>
    </div>
  )
}
clickAdd2() {
  console.log('click2')
}
```
直接在render里写行内的箭头函数，然后在箭头函数内调用组件内的函数(比较推荐，便于传参)  
```
render() {
  return (
    <div>
      <button onClick={() => this.clickAdd4()}>add4</button>
    </div>
  )
}
clickAdd4 = () => {
  console.log('click4')
}
```

知识回顾：改变this指向的三种方法：call、apply、bind，call和apply本身就是调用函数的一种方式，所以会自动执行，而bind不是调用函数的方法，所以需要在后面加小括号来手动执行。所以在react事件中改变函数内的this指向应该使用bind。
```
var obj1 = {
  name: 'obj1',
  getName() {
    console.log(this.name)
  }
}

var obj2 = {
  name: 'obj2',
  getName() {
    console.log(this.name)
  }
}

obj1.getName()
// obj1

obj2.getName()
// obj2

obj1.getName.call(obj2)
// obj2

obj1.getName.apply(obj2)
// obj2

obj1.getName.bind(obj2)()
// obj2
```

3、Event 对象  
和普通浏览器一样，事件handler会被自动传入一个 event 对象，这个对象和普通的浏览器 event 对象所包含的方法和属性都基本一致。不同的是 React中的 event 对象并不是浏览器提供的，而是它自己内部所构建的。它同样具有 event.stopPropagation 、 event.preventDefault 这种常用的方法。  

4、常见面试题  
a.React事件绑定和原生事件绑定的区别：  
React并不会真正的将事件绑定到每一个DOM元素上，而是采用事件代理的模式。

#### 2.6 Ref的应用
6.1给标签设置ref="username"
 通过这个获取this.refs.username , ref可以获取到应用的真实dom
6.2 给组件设置ref="username"
 通过这个获取this.refs.username ,ref可以获取到组件对象
6.3 新的写法
```
<p className="hello">Hello world</p>
myRef = React.createRef()
<div ref={this.myRef}>hello</div>
访问this.myRef.current
```
### 3.组件的数据挂载方式
#### 3.1 状态(state)
状态就是组件描述某种显示情况的数据，由组件自己设置和更改，也就是说由组件自己维护，使用状态的目的就是为了在不同的状态下使组件的显示不同(自己管理)  

1. 定义state  
第一种方式  
```
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class App extends Component {
  state = {
    name: 'React',
    isLiked: false
  }
  render () {
    return (
      <div>
        <h1>欢迎来到{this.state.name}的世界</h1>
        <button>
          {
            this.state.isLiked ? '❤取消' : '🖤收藏'
          }
        </button>
      </div>
    )
  }
}
ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
```
另一种方式
```
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class App extends Component {
  state = {
    name: 'React',
    isLiked: false
  }
  render () {
    return (
      <div>
        <h1>欢迎来到{this.state.name}的世界</h1>
        <button>
          {
            this.state.isLiked ? '❤取消' : '🖤收藏'
          }
        </button>
      </div>
    )
  }
}
ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
```
this.state 是纯js对象,在vue中，data属性是利用 Object.defineProperty 处理过的，更改data的数据的时候会触发数据的 getter 和 setter ，但是React中没有做这样的处理，如果直接更改的话，react是无法得知的，所以，需要使用特殊的更改状态的方法 setState 。  

2. setState  
isLiked 存放在实例的 state 对象当中，组件的 render 函数内，会根据组件的 state 的中的isLiked 不同显示“取消”或“收藏”内容。下面给 button 加上了点击的事件监听。  
```
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'React',
      isLiked: false
    }
  }
  handleBtnClick = () => {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }
  render () {
    return (
      <div>
        <h1>欢迎来到{this.state.name}的世界</h1>
        <button onClick={this.handleBtnClick}>
          {
            this.state.isLiked ? '❤取消' : '🖤收藏'
          }
        </button>
      </div>
    )
  }
}
ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
```
setState 有两个参数  
第一个参数可以是对象，也可以是方法return一个对象，我们把这个参数叫做 updater  
参数是对象
```
this.setState({
  isLiked: !this.state.isLiked
})
```
参数是方法
```
this.setState((prevState, props) => {
  return {
    isLiked: !prevState.isLiked
  }
})
```
注意的是这个方法接收两个参数，第一个是上一次的state, 第二个是props  
setState 是异步的，所以想要获取到最新的state，没有办法获取，就有了第二个参数，这是一个可选的回调函数  
```
this.setState((prevState, props) => {
  return {
    isLiked: !prevState.isLiked
  }
}, () => {
  console.log('回调里的',this.state.isLiked)
})
console.log('setState外部的',this.state.isLiked)
```

3. setState的同步与异步
每当setState执行时，React底层逻辑代码中的有一个支持合并标志位，当setState处在同步代码中时，会被立即置为true，此时setState会被当做异步处理，此次事件循环的所有setState会被合并，并且以最后一次的setState为准；当setState处在异步代码中时，标志位会被置为false，此时setState会被当做同步处理。


#### 3.2 属性(props)
props 是正常是外部传入的，组件内部也可以通过一些方式来初始化的设置，属性不能被组件自己更改，但是你可以通过父组件主动重新渲染的方式来传入新的 props
属性是描述性质、特点的，组件自己不能随意更改。
之前的组件代码里面有 props 的简单使用，总的来说，在使用一个组件的时候，可以把参数放在标签的属性当中，所有的属性都会作为组件 props 对象的键值。通过箭头函数创建的组件，需要通过函数的参数来接收 props :  
(1) 在组件上通过key=value 写属性,通过this.props获取属性,这样组件的可复用性提高了。  
(2) 注意在传参数时候，如果写成isShow="true" 那么这是一个字符串 如果写成isShow={true} 这个是布尔值  
(3) {...对象} 展开赋值  
(4) 默认属性值  
```
*.defaultProps = {
}
static defaultProps = {
  myname:"默认的myname",
  myshow:true
}
```
(5) prop-types 属性验证
```
import propTypes from "prop-types";
*.propTypes={
  name:propTypes.string,
  age:propTypes.number
}
static propTypes={
  myname:propTypes.string,
  myshow:propTypes.bool
}
```

#### 3.3 状态VS属性
相似点：都是纯js对象，都会触发render更新，都具有确定性（状态/属性相同，结果相同）
不同点：  
1. 属性能从父组件获取，状态不能
2. 属性可以由父组件修改，状态不能
3. 属性能在内部设置默认值，状态也可以，设置方式不一样
4. 属性不在组件内部修改，状态要在组件内部修改
5. 属性能设置子组件初始值，状态不可以
6. 属性可以修改子组件的值，状态不可以
state 的主要作用是用于组件保存、控制、修改自己的可变状态。 state 在组件内部初始化，可以被组件自身修改，而外部不能访问也不能修改。你可以认为 state 是一个局部的、只能被组件自身控制的数据源。 state 中状态可以通过 this.setState 方法进行更新， setState 会导致组件的重新渲染。
props 的主要作用是让使用该组件的父组件可以传入参数来配置该组件。它是外部传进来的配置参数，组件内部无法控制也无法修改。除非外部组件主动传入新的 props ，否则组件的 props 永远保持不变。
没有 state 的组件叫无状态组件（stateless component），设置了 state 的叫做有状态组件（stateful component）。因为状态会带来管理的复杂性，我们尽量多地写无状态组件，尽量少地写有状态的组件。这样会降低代码维护的难度，也会在一定程度上增强组件的可复用性。

#### 3.4 渲染数据
1. 条件渲染
```
{
  condition ? '渲染列表的代码' : '空空如也'
}
```
2. 列表渲染
```
// 数据
const people = [{
  id: 1,
  name: 'Leo',
  age: 35
}, {
  id: 2,
  name: 'XiaoMing',
  age: 16
}]
// 渲染列表
{
  people.map(person => {
    return (
      <dl key={person.id}>
        <dt>{person.name}</dt>
        <dd>age: {person.age}</dd>
      </dl>
    )
  })
}
```
React的高效依赖于所谓的 Virtual-DOM，尽量不碰 DOM。对于列表元素来说会有一个问题：元素可能会在一个列表中改变位置。要实现这个操作，只需要交换一下 DOM 位置就行了，但是React并不知道其实我们只是改变了元素的位置，所以它会重新渲染后面两个元素（再执行 Virtual-DOM ），这样会大大增加 DOM 操作。但如果给每个元素加上唯一的标识，React 就可以知道这两个元素只是交换了位置，这个标识就是 key ，这个 key 必须是每个元素唯一的标识。
3. dangerouslySetInnerHTML
对于富文本创建的内容，后台拿到的数据是这样的：
```
content = "<p>React.js是一个构建UI的库</p>"
```
处于安全的原因，React当中所有表达式的内容会被转义，如果直接输入，标签会被当成文本。这时候就需要使用 dangerouslySetHTML 属性，它允许我们动态设置 innerHTML
```
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      content : "<p>React.js是一个构建UI的库</p>"
    }
  }
  render () {
    return (
      <div
        // 注意这里是两个下下划线 __html
        dangerouslySetInnerHTML={{__html: this.state.content}}
      /div>
    )
  }
}
ReactDOM.render(
    <App/>,
  document.getElementById('root')
)
```

### 4.表单中的受控组件和非受控组件
#### 4.1 非受控组件
React要编写一个非受控组件，可以 使用 ref 来从 DOM 节点中获取表单数据，就是非受控组件。例如，下面的代码使用非受控组件接受一个表单的值：
```
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```
因为非受控组件将真实数据储存在 DOM 节点中，所以在使用非受控组件时，有时候反而更容易同时集成 React 和非 React 代码。如果你不介意代码美观性，并且希望快速编写代码，使用非受控组件往往可以减少你的代码量。否则，你应该使用受控组件。  

默认值
在 React 渲染生命周期时，表单元素上的 value 将会覆盖 DOM 节点中的值，在非受控组件中，你经常希望 React 能赋予组件一个初始值，但是不去控制后续的更新。 在这种情况下, 你可以指定一个defaultValue 属性，而不是 value 。  
```
render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input
        defaultValue="Bob"
        type="text"
        ref={this.input} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```
同样， <input type="checkbox"> 和 <input type="radio"> 支持 defaultChecked ， <select>和 <textarea> 支持 defaultValue 。

#### 4.2 受控组件
在HTML中，表单元素（如input、span、select通信）
```
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
 }
  handleSubmit(event) {
    alert('提交的名字: ' + this.state.value);
    event.preventDefault();
 }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input type="text" value={this.state.value} onChange={this.handleChange} 
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
```
由于在表单元素上设置了 value 属性，因此显示的值将始终为 this.state.value ，这使得 React 的 state 成为唯一数据源。由于 handlechange 在每次按键时都会执行并更新 React 的state，因此显示的值将随着用户输入而更新。  
对于受控组件来说，输入的值始终由 React 的 state 驱动。你也可以将 value 传递给其他 UI 元素，或者通过其他事件处理函数重置，但这意味着你需要编写更多的代码。  

>注意: 另一种说法（广义范围的说法），React组件的数据渲染是否被调用者传递的 props 完全控制，控制则为受控组件，否则非受控组件。

### 5.组件通信方式
#### 5.1 父子组件通信方式
(1) 传递数据(父传子)与传递方法(子传父)
(2) ref标记 (父组件拿到子组件的引用，从而调用子组件的方法)
在父组件中清除子组件的input输入框的value值。this.refs.form.reset()

#### 5.1 非父子组件通信方式
(1) 状态提升(中间人模式)
React中的状态提升概括来说,就是将多个组件需要共享的状态提升到它们最近的父组件上.在父组件上改变这个状态然后通过props分发给子组件.
(2) 发布订阅模式实现
(3) context状态树传参
```
a. 先定义全局context对象
import React from 'react'
const GlobalContext = React.createContext()
export default GlobalContext
```
```
b. 根组件引入GlobalContext，并使用GlobalContext.Provider（生产者）
//重新包装根组件 class App {}
<GlobalContext.Provider
  value={{
    name:"kerwin",
    age:100,
    content:this.state.content,
    show:this.show.bind(this),
    hide:this.hide.bind(this)
  }}
>
  <之前的根组件></之前的根组件>
</GlobalContext.Provider>
```
```
c. 任意组件引入GlobalContext并调用context，使用GlobalContext.Consumer（消费者）
<GlobalContext.Consumer>
  {
    context => {
      this.myshow = context.show; //可以在当前组件任意函数触发
      this.myhide = context.hide;//可以在当前组件任意函数触发
      return (
        <div>
          {context.name}-{context.age}-{context.content}
        </div>
      )
    }
  }
</GlobalContext.Consumer>
```

### 6.React生命周期
#### 6.1 初始化阶段

#### 6.2 运行中阶段

#### 6.3 销毁阶段

#### 6.4 老生命周期
(1) componentWillMount ,在ssr中 这个方法将会被多次调用， 所以会重复触发多遍，同时在这里如果绑定事件，将无法解绑，导致内存泄漏 ， 变得不够安全高效逐步废弃。  
(2) componentWillReceiveProps 外部组件多次频繁更新传入多次不同的 props，会导致不必要的异步请求。  
(3) componetWillupdate, 更新前记录 DOM 状态, 可能会做一些处理，与componentDidUpdate相隔时间如果过长， 会导致 状态不太信。  

#### 6.5 新生命周期
（1）getDerivedStateFromProps 第一次的初始化组件以及后续的更新过程中(包括自身状态更新以及父传子) ，返回一个对象作为新的state，返回null则说明不需要在这里更新state
```
//老的生命周期的写法
componentDidMount() {
  if(this.props.value!==undefined){
    this.setState({
      current:this.props.value
    })
  }
}
componentWillReceiveProps(nextProps){
  if(nextProps.value !==undefined){
    this.setState({
      current:nextProps.value
    })
  }
}
// 新的生命周期写法
static getDerivedStateFromProps(nextProps) {
  if(nextProps.value!==undefined){
    return {
      current:nextProps.value
    }
  }
  return null
}
```
（2）getSnapshotBeforeUpdate 取代了 componetWillUpdate ,触发时间为update发生的时候，在render之后dom渲染之前返回一个值，作为componentDidUpdate的第三个参数。
```
//新的数据不断插入数据前面， 导致我正在看的数据向下走，如何保持可视区依旧是我之前看的数据呢？
getSnapshotBeforeUpdate(){
  return this.refs.wrapper.scrollHeight
}
componentDidUpdate(prevProps, prevState,preHeight) {
  //if(preHeight===200)return ;
  this.refs.wrapper.scrollTop +=this.refs.wrapper.scrollHeight-preHeight
}
<div style={{height:"200px",overflow:"auto"}}} ref="wrapper">
  <ul>
    .........
  </ul>
</div>
```

#### 6.6 react中性能优化的方案
1. shouldComponentUpdate
控制组件自身或者子组件是否需要更新，尤其在子组件非常多的情况下， 需要进行优化。  
2. PureComponent
PureComponent会帮你 比较新props 跟 旧的props， 新的state和老的state（值相等,或者对象含有相同的属性、且属性值相等 ），决定shouldcomponentUpdate 返回true 或者false， 从而决定要不要呼叫 render function。  
>注意：如果你的 state 或 props 『永远都会变』，那 PureComponent 并不会比较快，因为shallowEqual 也需要花时间。

## 三、React Hooks
### 使用hooks的理由
1. 高阶组件为了复用，导致代码层级复杂
2. 生命周期的复杂
3. 写成functional组件,无状态组件 ，因为需要状态，又改成了class,成本高

### 1.useState(保存组件状态)
```
const [state, setstate] = useState(initialState)
```

### 2.useEffect(处理副作用)和useLayoutEffect (同步执行副作用)
Function Component 不存在生命周期，所以不要把 Class Component 的生命周期概念搬过来试图对号入座。
```
useEffect(() => {
  //effect
  return () => {
    //cleanup
  };
}, [依赖的状态;空数组,表示不依赖])
```
**不要对 Dependencies 撒谎, 如果你明明使用了某个变量，却没有申明在依赖中，你等于向 React 撒了谎，后果就是，当依赖的变量改变时，useEffect 也不会再次执行, eslint会报警告。**
Preview页面改造成函数式组件，在路径上从id=1切换到id=2也会自动重新加载，比class组件方便
```
let id = props.match.params.myid
useEffect(()=>{
  axios.get(`/articles/${id}`).then(res => {
    settitle(res.data.title)
    setcontent(res.data.content)
    setcategory(res.data.category)
  })
},[id])
```
useEffect和useLayoutEffect有什么区别？
**简单来说就是调用时机不同， useLayoutEffect 和原来 componentDidMount & componentDidUpdate 一致，在react完成DOM更新后马上同步调用的代码，会阻塞页面渲染。而 useEffect 是会在整个页面渲染完才会调用的代码。**
官方建议优先使用 useEffect
>However, we recommend starting with useEffect first and only trying useLayoutEffect if that causesa problem.
在实际使用时如果想避免**页面抖动**（在 useEffect 里修改DOM很有可能出现）的话，可以把需要操作DOM的代码放在 useLayoutEffect 里。在这里做点dom操作，这些dom修改会和 react 做出的更改一起被一次性渲染到屏幕上，只有一次回流、重绘的代价。

### 3.useCallback(记忆函数)
防止因为组件重新渲染，导致方法被重新创建 ，起到缓存作用; 只有第二个参数 变化了，才重新声明一次
```
var handleClick = useCallback(()=>{
  console.log(name)
},[name])
<button onClick={()=>handleClick()}>hello</button>
//只有name改变后， 这个函数才会重新声明一次，
//如果传入空数组， 那么就是第一次创建后就被缓存， 如果name后期改变了,拿到的还是老的name。
//如果不传第二个参数，每次都会重新声明一次，拿到的就是最新的name.
```

### 4.useMemo 记忆组件
useCallback 的功能完全可以由 useMemo 所取代，如果你想通过使用 useMemo 返回一个记忆函数也是完全可以的。
```
useCallback(fn, inputs) is equivalent to useMemo(() => fn, inputs).
```
唯一的区别是：**useCallback 不会执行第一个参数函数，而是将它返回给你，而 useMemo 会执行第一个函数并且将函数执行结果返回给你。**所以在前面的例子中，可以返回 handleClick 来达到存储函数的目的。  
所以 useCallback 常用记忆事件函数，生成记忆后的事件函数并传递给子组件使用。而 useMemo 更适合经过函数计算得到一个确定的值，比如记忆组件。  

### 5.useRef(保存引用值)
```
const myswiper = useRef(null);
<Swiper ref={myswiper}/>
```

### 6.useReducer和useContext(减少组件层级)
```
import React from 'react'
var GlobalContext= React.createContext()
// 注意此时的reduecer 返回值是一个对象 {isShow:false,list:[]}

function App(props){
  let [state,dispatch] = useReducer(reducer,{isShow:true,list:[]})
  return <GlobalContext.Provider value={{
    dispatch
  }}>
    <div>
      {
        state.isShow?
          <div >我是选项卡</div>
          :null
      }
      {props.children}
    </div>
  </GlobalContext.Provider>
}
function Detail(){
  var {dispatch} = useContext(GlobalContext)
  useEffect(() => {
    //隐藏
    dispatch({
      type:"Hide",
      payload:false
    })
    return () => {
      //显示
      dispatch({
        type:"Show",
        payload:true
      })
    };
  }, [])
  return <div>
    detail
  </div>
}
```

### 7.自定义hooks
**当我们想在两个函数之间共享逻辑时，我们会把它提取到第三个函数中。**  
必须以“use”开头吗？必须如此。这个约定非常重要。不遵循的话，由于无法判断某个函数是否包含对其内部 Hook的调用，React 将无法自动检查你的 Hook 是否违反了 Hook 的规则

## 四、React路由
### 1. 什么是路由？
路由是根据不同的 url 地址展示不同的内容或页面。
一个针对React而设计的路由解决方案、可以友好的帮你解决React components 到URl之间的同步映射关系

### 2. 路由安装
[官方文档](https://v5.reactrouter.com/web/guides/quick-start)
```
npm install react-router-dom@5
```

### 3. 路由使用
#### 3.1 路由方法导入
```
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
```

#### 3.2 定义路由以及重定向
```
<HashRouter>
  <Switch>
    <Route path="/films" component={Films}/>
    <Route path="/cinemas" component={Cinemas}/>
    <Route path="/center" component={Center}/>
    <Redirect from="/" to="/films" />
      {/* <Redirect from="/" to="/films" exact/>
      <Route path="*" component={NotFound}/> */}
  </Switch>
</HashRouter>
```
注意：
a. exact 精确匹配 (Redirect 即使使用了exact, 外面还要嵌套Switch 来用)
b. Warning: Hash history cannot PUSH the same path; a new entry will not be added to the history stack,这个警告只有在hash 模式会出现。

#### 3.3 嵌套路由
```
<Switch>
  <Route path="/films/nowplaying" component={Nowplaying}/>
  <Route path="/films/comingsoon" component={Comingsoon}/>
  <Redirect from="/films" to="/films/nowplaying"/>
</Switch>
```

#### 3.4 路由跳转方式
a. 声明式导航
```
<NavLink to="/films" activeClassName="active">films</NavLink>
<NavLink to="/cinemas" activeClassName="active">cinemas</NavLink>
<NavLink to="/center" activeClassName="active">center</NavLink>
```

b. 编程式导航
```
this.props.history.push(`/center`)
```

#### 3.5 路由传参
```
(1)
this.props.history.push({ pathname : '/user' ,query : { day: 'Friday'} })
this.props.location.query.day
(2)
this.props.history.push({ pathname:'/user',state:{day : 'Friday' } })
this.props.location.state.day
```

#### 3.6 路由拦截
```
<Route path="/center" render={()=>isAuth()?<Center/>:<Login/>}/>
```

#### 3.7 withRouter的应用与原理
```
import { withRouter } from "react-router";
withRouter(MyComponent);
withRouter(connect(...)(MyComponent))
```

### 4. 项目注意
#### 4.1 反向代理
[官方文档](https://create-react-app.dev/docs/proxying-api-requests-in-development)
```
npm install http-proxy-middleware --save
```
```
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};
```

#### 4.2 css module
[官方文档](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)
```
全局
:global(.active){
}
```

## 五、Redux
### 5.1 Flux与Redux
#### 5.1.1 redux介绍及设计和使用的三大原则
Flux 是一种架构思想，专门解决软件的结构问题。它跟MVC架构是同一类东西，但是更加简单和清晰。Flux存在多种实现(至少15种)
>[https://github.com/voronianski/flux-comparison](https://github.com/voronianski/flux-comparison)
Facebook Flux是用来构建客户端Web应用的应用架构。它利用单向数据流的方式来组合React中的视图组件。它更像一个模式而不是一个正式的框架，开发者不需要太多的新代码就可以快速的上手Flux。  
Redux最主要是用作应用状态的管理。简言之，Redux用一个单独的常量状态树（state对象）保存这一整个应用的状态，这个对象不能直接被改变。当一些数据变化了，一个新的对象就会被创建（使用actions和reducers），这样就可以进行数据追踪，实现时光旅行。  

#### 5.1.2 redux工作流
state以单一对象存储在store对象中
state只读（每次都返回一个新对象）
使用纯函数reducer执行state更新

纯函数：
1.对外界无副作用，即不影响或改变外界变量
2.同样的输入同样的输出，即只要传入的值不变，输出的值就不会改变

#### 5.1.3 redux使用
```
// 配置store
import { legacy_createStore as createStore } from 'redux'

const reducer = (prevState = { show: true }, action) => {
  let newState = { ...prevState }
  switch (action.type) {
    case 'showTabbar':
      newState.show = true
      return newState
    case 'hideTabbar':
      newState.show = false
      return newState

    default:
      return prevState;
  }
}

const store = createStore(reducer)
export default store

// 发布
store.dispatch({
  type: 'hideTabbar'
})

store.dispatch({
  type: 'showTabbar'
})

// 订阅
store.subscribe(() => {
  this.setState({
    show: store.getState().show
  })
})
```

#### 5.1.4 redux原理解析
store 是通过 createStore创建出来的，所以他的结构  
```
// 手写简易版createStore
function lxcreateStore(reducer) {
  let list = []
  let state = reducer(undefined, {})

  function dispatch(action) {
    state = reducer(state, action)
    for (let i in list) {
      list[i] && list[i]()
    }
  }

  function subscribe(callback) {
    list.push(callback)
  }

  function getState() {
    return state
  }

  return {
    dispatch,
    subscribe,
    getState
  }
}
```

#### 5.1.5 redux扩展
如果如果不同的action所处理的属性之间没有联系，我们可以把 Reducer 函数拆分。不同的函数负责处理不同属性，最终把它们合并成一个大的 Reducer 即可。详见05-Redux
```
import {combineReducers} from "redux";
const reducer = combineReducers({
  a: functionA,
  b: functionB,
  c: functionC
})
//  访问：
(state)=>{
  return {
    kerwinstate:state.a (不同的命名空间)
  }
}
```

#### 5.1.6 redux中间件
在redux里，action仅仅是携带了数据的普通js对象。action creator返回的值是这个action类型的对象。然后通过store.dispatch()进行分发。同步的情况下一切都很完美，但是reducer无法处理异步的情况。  
那么我们就需要在action和reducer中间架起一座桥梁来处理异步。这就是middleware。  

1. 中间件的由来与原理、机制
```
export default function thunkMiddleware({ dispatch, getState }) {
  return next => action =>
    typeof action === 'function' ?
      action(dispatch, getState) :
      next(action);
}
```
这段代码的意思是，中间件这个桥梁接受到的参数action，如果不是function则和过去一样直接执行next方法(下一步处理)，相当于中间件没有做任何事。如果action是function，则先执行action，action的处理结束之后，再在action的内部调用dispatch。

2. 常用异步中间件：
a. redux-thunk (store.dispatch参数可以是一个function)
```
import thunk from 'redux-thunk';
import {applyMiddleware} from "redux";
const store = createStore(fetchReducer, applyMiddleware(thunk));
const getComingSoon = ()=>{
  //进行异步请求
  return (dispatch,store)=>{
    ...
  }
}
```

b. redux-promise (store.dispatch参数可以是一个promise对象)
```
import promiseMiddleware from 'redux-promise';
const store = createStore(fetchReducer, applyMiddleware(thunk,promiseMiddleware));
const getComingSoon = ()=>{
  //进行异步请求
  return axios.get(`****`).then(res=>{
    return {
      type:"cominglist",
      info:res.data.data
    }
  })
}

```

#### 5.1.7 Redux DevTools Extension
[https://github.com/zalmoxisus/redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
```
import { createStore, compose} from 'redux'
import reducer from './reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)))
export default store
```

### 5.2  react-redux
#### 5.2.1 介绍
[https://github.com/reduxjs/react-redux](https://github.com/reduxjs/react-redux)

#### 5.2.2 容器组件与UI组件
1. UI组件
只负责 UI 的呈现，不带有任何业务逻辑
没有状态（即不使用this.state这个变量）
所有数据都由参数（this.props）提供
不使用任何 Redux 的 API

2. 容器组件
负责管理数据和业务逻辑，不负责 UI 的呈现
带有内部状态
使用 Redux 的 API

#### 5.2.3 Provider与connect
1. React-Redux 提供Provider组件，可以让容器组件拿到state。
```
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
```

2. React-Redux 提供connect方法，用于从 UI 组件生成容器组件。connect的意思，就是将这两种组件连起来.
```
import { connect } from 'react-redux'
import { increment, decrement, reset } from './actionCreators'
// const Counter = ...
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProps = { increment, decrement, reset }
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
```

#### 5.2.4 HOC与context通信在react-redux底层中的应用
1. connect 是HOC， 高阶组件
2. Provider组件，可以让容器组件拿到state ， 使用了context

#### 5.2.5 高阶组件构建与应用
HOC不仅仅是一个方法，确切说应该是一个组件工厂，获取低阶组件，生成高阶组件。
(1)代码复用，代码模块化
(2)增删改props
(3) 渲染劫持
```
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
```

#### 5.2.6 Redux 持久化
持久化后的store
```
import { applyMiddleware, combineReducers, legacy_createStore as createStore, compose } from 'redux'
import TabberReducer from './reducers/TabbarReducer';
import CityReducer from './reducers/CityReducer';
import CinemaListReducer from './reducers/CinemaListReducer';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise'
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'lix',
  storage,
  // 白名单whitelist黑名单blacklist，如果写了白名单，只有写在白名单内的reducer就会持久化，如果写了黑名单，那么只有写在黑名单内的reducer不会被持久化
  whitelist: ['CityReducer'],
  // stateReconciler: autoMergeLevel2
  //控制在本地存储中，新老状态怎么合并，覆盖？或者合并？
};

const reducer = combineReducers({ TabberReducer, CityReducer, CinemaListReducer })

const myPersistReducer = persistReducer(persistConfig, reducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(myPersistReducer, composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)))

const persistor = persistStore(store)

export { store, persistor };
```
持久化后的根组件
```
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./05-React-Redux/App"
import { store, persistor } from './05-React-Redux/redux/store'
import { PersistGate } from 'redux-persist/lib/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'))
```

## 六、组件库


## 七、Immutable
### 1.Immutable介绍
[https://github.com/immutable-js/immutable-js](https://github.com/immutable-js/immutable-js)
每次修改一个 Immutable 对象时都会创建一个新的不可变的对象，在新对象上操作并不会影响到原对象的数据。这个库的实现是深拷贝还是浅拷贝？

### 2.深拷贝与浅拷贝的关系
(1) var arr = { } ; arr2 = arr ;
(2) Object.assign() 只是一级属性复制，比浅拷贝多拷贝了一层而已。
(3) const obj1 = JSON.parse(JSON.stringify(obj)); 数组，对象都好用的方法(缺点: 不能有undefined)

### 3. Immutable优化性能的方式
Immutable 实现的原理是 Persistent Data Structure（持久化数据结构），也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗，Immutable 使用了 Structural Sharing（结构共享），即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享。

### 4.Immutable中常用类型（Map，List）
#### 4.1 Map
```
const { Map } = require('immutable');
const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set('b', 50);
map1.get('b') + " vs. " + map2.get('b'); // 2 vs. 50
```
```
import { Map } from 'immutable'
let a = Map({
      name: 'xiaoming',
      age: 10,
      filter: Map({
        text: '',
        up: true,
        down: false,
      })
    })
let b = a.set('name', 'xiaohong')
a === b // false
a.get('filter') === b.get('filter') // true
```

#### 4.2 List
```
const { List } = require('immutable');
const list1 = List([ 1, 2 ]);
const list2 = list1.push(3, 4, 5);
const list3 = list2.unshift(0);
const list4 = list1.concat(list2, list3);
assert.equal(list1.size, 2);
assert.equal(list2.size, 5);
assert.equal(list3.size, 6);
assert.equal(list4.size, 13);
assert.equal(list4.get(0), 1);
//push, set, unshift or splice 都可以直接用，返回一个新的immutable对象
```

#### 4.3 merge , concat
```
const { Map, List } = require('immutable');
const map1 = Map({ a: 1, b: 2, c: 3, d: 4 });
const map2 = Map({ c: 10, a: 20, t: 30 });
const obj = { d: 100, o: 200, g: 300 };
const map3 = map1.merge(map2, obj);
// Map { a: 20, b: 2, c: 10, d: 100, t: 30, o: 200, g: 300 }
const list1 = List([ 1, 2, 3 ]);
const list2 = List([ 4, 5, 6 ]);
const array = [ 7, 8, 9 ];
const list3 = list1.concat(list2, array);
// List [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```

#### 4.4 toJS
```
const { Map, List } = require('immutable');
const deep = Map({ a: 1, b: 2, c: List([ 3, 4, 5 ]) });
console.log(deep.toObject()); // { a: 1, b: 2, c: List [ 3, 4, 5 ] }
console.log(deep.toArray()); // [ 1, 2, List [ 3, 4, 5 ] ]
console.log(deep.toJS()); // { a: 1, b: 2, c: [ 3, 4, 5 ] }
JSON.stringify(deep); // '{"a":1,"b":2,"c":[3,4,5]}'
```

#### 4.5 fromJS
```
const { fromJS } = require('immutable');
const nested = fromJS({ a: { b: { c: [ 3, 4, 5 ] } } });
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ] } } }
const nested2 = nested.mergeDeep({ a: { b: { d: 6 } } });
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 6 } } }
console.log(nested2.getIn([ 'a', 'b', 'd' ])); // 6
//如果取一级属性 直接通过get方法，如果取多级属性 getIn(["a","b","c"]])
//setIn 设置新的值
const nested3 = nested2.setIn([ 'a', 'b', 'd' ], "kerwin");
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: "kerwin" } } }
//updateIn 回调函数更新
const nested3 = nested2.updateIn([ 'a', 'b', 'd' ], value => value + 1);
console.log(nested3);
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 7 } } }
const nested4 = nested3.updateIn([ 'a', 'b', 'c' ], list => list.push(6));
// Map { a: Map { b: Map { c: List [ 3, 4, 5, 6 ], d: 7 } } }
```

### 5.Immutable+Redux的开发方式
```
//reducer.js
const initialState = fromJS({
  category:"",
  material:""
})
const reducer = (prevstate = initialState,action={})=>{
  let {type,payload} = action
  switch(type){
    case GET_HOME:
      var newstate =prevstate.set("category",fromJS(payload.category))
      var newstate2 =newstate.set("material",fromJS(payload.material))
      return newstate2;
    default:
      return prevstate
  }
}

//home.js
const mapStateToProps = (state)=>{
  return {
    category:state.homeReducer.getIn(["category"]) || Map({}),
    material:state.homeReducer.getIn(["material"]) || Map({})
  }
}
this.props.category.get("相关属性")
this.props.category.toJS() //或者转成普通对象
```

### 6.缺点
容易跟原生混淆  
文档与调试不方便

## 八、Mobx
### 1.Mobx介绍
[https://cn.mobx.js.org/](https://cn.mobx.js.org/)  
1. Mobx是一个功能强大，上手非常容易的状态管理工具。
2. Mobx背后的哲学很简单: 任何源自应用状态的东西都应该自动地获得。
3. Mobx利用getter和setter来收集组件的数据依赖关系，从而在数据发生变化的时候精确知道哪些组件需要重绘，在界面的规模变大的时候，往往会有很多细粒度更新。

### 2.Mobx与redux的区别
Mobx写法上更偏向于OOP  
对一份数据直接进行修改操作，不需要始终返回一个新的数据  
并非单一store,可以多store。  
Redux默认以JavaScript原生对象形式存储数据，而Mobx使用可观察对象.  

#### 优点
1. 学习成本小  
2. 面向对象编程, 而且对 TS 友好  

#### 缺点
1. 过于自由：Mobx提供的约定及模版代码很少，代码编写很自由，如果不做一些约定，比较容易导致团队代码风格不统一。  
2. 相关的中间件很少，逻辑层业务整合是问题。  

### 3.Mobx的使用
#### 3.1 observable 和 autorun
```
import { observable, autorun } from 'mobx';

const value = observable.box(0);
const number = observable.box(100);
autorun(() => {
  console.log(value.get());
});
value.set(1);
value.set(2);
number.set(101);
//0,1,2。 // autorun 使用到才能被执行
//只能是同步，异步需要处理

//观察对象，通过map
const map = observable.map({ key: "value"});
//map.set("key", "new value");
//map.get("key")

//观察对象，不通过map
const map = observable({ key: "value"});
// map.key map.key="xiaoming"

//观察数组
const list = observable([1, 2, 4]);
list[2] = 3;
```

#### 3.2 action，runInAction和严格模式
```
import {observable, action, configure,runInAction} from 'mobx';
configure({enforceActions:'always'})
//严格模式， 必须写action,
//如果是never，可以不写action,
//最好设置always, 防止任意地方修改值， 降低不确定性。
class Store {
  @observable number = 0;
  @observable name = "kerwin";
  @action add = () => {
    this.number++;
  }//action只能影响正在运行的函数，而无法影响当前函数调用的异步操作
  @action load = async () => {
    const data = await getData();
    runInAction(() => {
      this.name = data.name;
    });
  }// runInAction 解决异步问题
}
const newStore = new Store();
newStore.add();

//如果在组件监听
componentDidMount() {
  autorun(()=>{
    console.log(newStore.number);
  })
}
```

### 4.mobx-react的使用
#### 4.1 react 组件里使用 @observer  
 observer 函数/装饰器可以用来将 React 组件转变成响应式组件。  
#### 4.2 可观察的局部组件状态  
@observable 装饰器在React组件上引入可观察属性。而不需要通过 React 的冗长和强制性的 setState 机制来管理。
```
import {observer} from "mobx-react"
import {observable} from "mobx"

@observer class Timer extends React.Component {
  @observable secondsPassed = 0

  componentWillMount() {
    setInterval(() => {
      this.secondsPassed++
    }, 1000)
  }//如果是严格模式需要加上 @action 和 runInAction

  //一个新的生命周期钩子函数 componentWillReact
  //当组件因为它观察的数据发生了改变，它会安排重新渲染，
  //这个时候 componentWillReact 会被触发
  componentWillReact() {
    console.log("I will re-render, since the todo has changed!");
  }
  render() {
    return (<span>Seconds passed: { this.secondsPassed } </span> )
  }
}

ReactDOM.render(<Timer />, document.body)
```

#### 4.3 Provider 组件
它使用了 React 的上下文(context)机制，可以用来向下传递 stores。 要连接到这些 stores，需要传递一个 stores 名称的列表给 inject，这使得 stores 可以作为组件的 props 使用。this.props
```
class Store {
  @observable number = 0;
  @action add = () => {
    this.number++;
  }
}
export default new Store() //导出Store实例

@inject("kerwinstore")
@observer //需要转换为响应式组件
  class Child extends Component{
  render(){
    return <div>
      Child --{this.props.kerwinstore.number}
    </div>
  }
}

@inject("kerwinstore")
class Middle extends Component{
  render(){
    return <div>
      Middle-<button onClick={()=>{
      this.props.kerwinstore.add();
      }}>test</button>
      <Child/>
    </div>
  }
}

//通过provider传store进去
<Provider kerwinstore={store}>
  <Middle/>
</Provider>
```

### 5.支持装饰器
`npm i @babel/core @babel/plugin-proposal-decorators @babel/preset-env`
创建 .babelrc
```
{
  "presets": [
    "@babel/preset-env"
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ]
}
```
创建config-overrides.js
```
const path = require('path')
const { override, addDecoratorsLegacy } = require('customize-cra')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const customize = () => (config, env) => {
  config.resolve.alias['@'] = resolve('src')
  if (env === 'production') {
    config.externals = {
      'react': 'React',
      'react-dom': 'ReactDOM'
    }
  }
  return config
};

module.exports = override(addDecoratorsLegacy(), customize())
```
安装依赖
```
npm i customize-cra react-app-rewired
```
修改package.json
```
...
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  },
...
```

## 九、React + TS
### 1.typescript
[文档地址](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/)
1. TypeScript 的定位是静态类型语言，在写代码阶段就能检查错误，而非运行阶段。
2. 类型系统是最好的文档，增加了代码的可读性和可维护性。
3. 有一定的学习成本，需要理解接口（Interfaces）、泛型（Generics）、类（Classes）等。
4. ts最后被编译成js。

### 2.安装
`create-react-app my-app --template typescript`

### 3.声明
1. 可以在当前文件加上declare const $: any;
2. 安装 npm i @types/jquery @types是npm的一个分支，用来存放*.d.ts文件
```
npm i --save react-router-dom
npm i --save @types/react-router-dom // 编译器需要通过这个声明文件，进行类型检查工作
```

### 4.变量声明
```
// String(原生的构造函数) vs string (ts中的类型)
var myname:string = "字符"
var mybool:boolean = false
var mynumber:number = 100
var mylist:Array<string> = ["111","222","3333"]

var myname2:string | number | boolean = 100
var myname3:string | number = "kerwin"
var mylist2:Array<string| number> = [1,2,"kerwin"]
var mylist3:(string| number)[] = [1,2,"kerwin"]
```

### 5.定义普通函数
#### 5.1 接口描述形状
```
interface SearchFunc {
  (source: string, subString: string): boolean;
}
//对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。
let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
}
```

#### 5.2 传参
```
function Test(list:String[],text?:String,...args:String[]):void{
  console.log(list,text,args)
}
Test(["1111","2222"])
//list:["1111","2222"] text: undefined args: []

Test(["0","1"],"a","b","c")
//list:["0","1"] text: "a" args: ["b","c"]

```

#### 5.3 类型断言as
```
function Test( mytext:string|number ){
  console.log((mytext as string).length) //对
  console.log((mytext as any).length) //对
  console.log((mytext as string[]).length) //错，原声明没有这个类型，无法断言
}
```

### 6.定义普通类
```
interface MyInter {
  name:String, //必选属性
  readonly country:String,//只读属性
  getName():void //定义方法
}

class MyObj implements MyInter{
  name="kerwin"
  country="China"
  private age = 100 //私有属性， 不能在接口定义
  getName(){
    //...
  }
  private getAge(){
    //...
  } //私有方法， 不能在接口定义
}
```

### 7.定义类组件
```
interface PropInter {
  name: string | number;
  firstName?: string;//可选属性
  lastName?: string;//可选属性
  // [propName: string]: any 任意属性
}
interface StateInter {
  count: number
}

//根组件 ，第一个参数可以传any
class HelloClass extends React.Component<PropInter, StateInter> {
  state: State = {
    count: 0,
  }; //setState时候也才会检查
  static defaultProps = { // 属性默认值
    name: "default name"
    firstName: "",
    lastName: "",
  };
}
```

### 8.定义函数式组件
```
//根组件
const App:React.FC = (props)=>{
  console.log(props)
  const [name, setname] = useState<string>("kerwin")
  return <div>
    app
  </div>
}

//子组件接受属性 -1
interface iprops {
  count:number
}

const Child:React.FC<iprops> = (props)=>{
  return <div>
    child-{props.count}
  </div>
}

//子组件接受属性 -2
const Child = (props:iprops)=>{
  return <div>
    child-{props.count}
  </div>
}
```

#### 8.1 useRef
```
interface IContext{
  call:string
}
const GlobalContext = React.createContext<IContext>({
  call:"" //定义初始值,按照接口规则
})
<GlobalContext.Provider value={{
  call:"电话"
}}>
....
</GlobalContext.Provider>

const {call} = useContext(GlobalContext)
```

#### 8.2 useContext
```
interface IPrevState{
  count:number
}

interface IAction{
  type:string,
  payload:any
}

function reducer (prevState:IPrevState,action:IAction){
  .....
  return prevState
}

const [state,dispatch]= useReducer(reducer,{
  count:1
})
dispatch({
  type:"Action1",
  payload:[]
})
```

### 9.父子通信
```
//父组件调用
<Child key={index} item={item} index={index} cb={(index)=>{
  var newlist= [...list]
  newlist.splice(index,1)
  setList(newlist)
}}/>

//子组件
interface ItemType{
  item:string,
  index:number, //定义接口
  cb:(param:number)=>void //定义接口
}

const Child = (props:ItemType)=>{
  let {index,item,cb} = props
  return <div >{item}
    <button onClick={()=>cb(index)}>del-{index}</button>
  </div>
}
```

### 10.路由
#### 10.1 编程式导航
```
// 使用编程式导航，需要引入接口配置
import { RouteComponentProps } from "react-router-dom";

interface IProps {自己定义的接口}

type HomeProps = IProps & RouteComponentProps; //两个接口属性都支持

interface IState {}

class Home extends React.Component<HomeProps, IState> {
  private handleSubmit = async () => {
    //code for API calls
    this.props.history.push("/home");
  };
  public render(): any {
    return <div>Hello</div>;
  }
}
```

#### 10.2 动态路由
```
interface IParams{
  id:string
}

// RouteComponentProps是一个泛型接口
class Detail extends Component< RouteComponentProps<IParams> >{
  componentDidMount() {
    console.log(this.props.match.params.id)
  }
  render(){
    return <div>
      detail
    </div>
  }
}
```

### 11.redux
```
import {createStore} from 'redux'
interface ActionInter{
  type:String,
  payload:any
}
const reducer = (prevState={},action:ActionInter)=>{
  return action.payload
}
const store = createStore(reducer,//enhancer)
export default store
```

## 十、styled-components
它是通过JavaScript改变CSS编写方式的解决方案之一，从根本上解决常规CSS编写的一些弊端。  
通过JavaScript来为CSS赋能，我们能达到常规CSS所不好处理的逻辑复杂、函数方法、复用、避免干扰。样式书写将直接依附在JSX上面，HTML、CSS、JS三者再次内聚。all in js的思想。

### 1.基本
```
const StyleApp = styled.div`
  background:yellow;
  border:1px solid black;
  ul{
    li{
      color:red;
    }
  }

  &:hover{
    background:pink
  }//pc 测试
`

<StyleApp>
  <ul>
    <li>1111</li>
    <li>22222</li>
  </ul>
</StyleApp>
```

### 2.透传props
```
const StyledInput = styled.input`
  color: red;
  background: yellow;
  border: none;
  border-radius: 3px;
`

<StyledInput type="text" placeholder="okok"/>
```

### 3.基于props做样式判断
```
const StyledButton = styled.button`
  background:${props=>props.bg || 'blue'}
`

<StyledButton>click</StyledButton>
<StyledButton bg="red">click</StyledButton>
```

### 4.样式化任意组件(一定要写className )
```
const Child = (props)=><div className={props.className}>child</div>
const StyledChild = styled(Child)`
  background:red;
`
<StyledChild/>
```

### 5.扩展样式
```
const MyButton = styled.button`
  background:yellow;
`
const BigButton = styled(MyButton)`
  height:100px;
  width:100px;
`
```

### 6.加动画
```
import styled,{keyframes} from 'styled-components'
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div`
  width:100px;
  height:100px;
  background:yellow;
  animation:${rotate360} 1s linear infinite;
`
```

## 十一、单元测试

## 十二、saga
代码实现，详见项目内代码示例
store.js
```
import {createStore,applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import {reducer} from './reducer'
import mySagas from './saga'
const sagaMiddleware = createSagaMiddleware();//创建中间件
const store = createStore(reducer,{list:[]},applyMiddleware(sagaMiddleware))

//注意运行的时机是在store创建好了之后
sagaMiddleware.run(mySagas);
export default store
```
saga.js
```
import {takeEvery,put} from 'redux-saga/effects'
import {changeList} from './action'
function *mySagas(){
  //监听GET_LIST
  //在每个 `监听GET_LIST` action 被 dispatch 时调用 getList
  yield takeEvery("GET_LIST", getList);
  //yield takeEvery("DELETE_LIST", deleteList);
}
function *getList(){
  //异步处理
  let res = yield new Promise(resolve=>{
    setTimeout(()=>{
      resolve(["1111","2222","3333"])
    },2000)
  })
  yield put(changeList(res)) //发出新的action
}
export default mySagas
```
action.js
```
export const changeList = (value)=>{
  return {
    type:"CHANGE_LIST",
    payload:value
  }
}

export const getSaAction = ()=>{
  //GET_LIST 被saga监听
  return {
    type:"GET_LIST"
  }
}
```
reducer.js
```
export const reducer = (prevState,action)=>{
  let {type,payload} = action;
  switch(type){
    case "CHANGE_LIST":
      let newstate = {...prevState}
      newstate.list = [...newstate.list,...payload]
      return newstate
    default :
      return prevState
  }
}
```
App.js
```
class App extends Component {
  componentDidMount() {
    store.subscribe(()=>{
      console.log(store.getState())
    })
  }
  handleClick = ()=>{
    store.dispatch(getSaAction())
  }
  render() {
    return <div >
      <button onClick={this.handleClick}>获取异步</button>
    </div>
  }
}
```

## 十三、React补充
### 1.Portal
Portals 提供了一个最好的在父组件包含的DOM结构层级外的DOM节点渲染组件的方法。
```
ReactDOM.createPortal(child,container);
```
第一个参数child是可渲染的react子项，比如元素，字符串或者片段等。第二个参数container是一个DOM元素。

#### 1.1 用法
普通的组件，子组件的元素将挂载到父组件的DOM节点中。
```
render() {
  // React 挂载一个div节点，并将子元素渲染在节点中
  return (
    <div>
      {this.props.children}
    </div>
  );
}
```
有时需要将元素渲染到DOM中的不同位置上去，这是就用到的portal的方法。
```
render(){
  // 此时React不再创建div节点，而是将子元素渲染到Dom节点上。domNode，是一个有效的任意位置的dom节点。
  return ReactDOM.createPortal(
    this.props.children,
    domNode
  )
}
```
一个典型的用法就是当父组件的dom元素有 overflow:hidden 或者 z-inde 样式，而你又需要显示的子元素超出父元素的盒子。举例来说，如对话框，悬浮框，和小提示。

#### 1.2 在protal中的事件冒泡
虽然通过portal渲染的元素在父组件的盒子之外，但是渲染的dom节点仍在React的元素树上，在那个dom元素上的点击事件仍然能在dom树中监听到。
```
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const getDiv = () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  return div;
};

const withPortal = (WrappedComponent) => {
  class AddPortal extends Component {
    constructor(props) {
      super(props);
      this.el = getDiv();
    }
    componentWillUnmount() {
      document.body.removeChild(this.el);
    }
    render(props) {
      return ReactDOM.createPortal(<WrappedComponent {...props} />, this.el);
    }
  }
  return AddPortal;
};

class Modal extends Component {
  render() {
    return (
      <div>
        <div>amodal content</div>
        <button type="button">Click</button>
      </div>
    );
  }
}

const PortalModal = withPortal(Modal);

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }

  render() {
    return (
    <div onClick={this.handleClick}>
      <h3>ppppppppp</h3>
      <h3>num: {this.state.clicks}</h3>
      <PortalModal />
    </div>
    );
  }
}

export default Page;
```

### 2.Lazy 和 Suspense
#### 2.1 React.lazy 定义
React.lazy 函数能让你像渲染常规组件一样处理动态引入（的组件）。什么意思呢？其实就是懒加载。

1. 为什么代码要分割
当你的程序越来越大，代码量越来越多。一个页面上堆积了很多功能，也许有些功能很可能都用不到，但是一样下载加载到页面上，所以这里面肯定有优化空间。就如图片懒加载的理论。
2. 实现原理
当 Webpack 解析到该语法时，它会自动地开始进行代码分割(Code Splitting)，分割成一个文件，当使用到这个文件的时候会这段代码才会被异步加载。
3. 解决方案
在 React.lazy 和常用的三方包 react-loadable ，都是使用了这个原理，然后配合webpack进行代码打包拆分达到异步加载，这样首屏渲染的速度将大大的提高。
由于 React.lazy 不支持服务端渲染，所以这时候 react-loadable 就是不错的选择。

#### 2.2 如何使用React.lazy
下面示例代码使用create-react-app脚手架搭建：
```
//OtherComponent.js 文件内容

import React from 'react'
const OtherComponent = ()=>{
  return (
    <div>
      我已加载
    </div>
  )
}
export default OtherComponent

// App.js 文件内容
import React from 'react';
import './App.css';

//使用React.lazy导入OtherComponent组件
const OtherComponent = React.lazy(() => import('./OtherComponent'));
function App() {
  return (
    <div className="App">
      <OtherComponent/>
    </div>
  );
}
export default App;
```
这是最简单的 React.lazy ，但是这样页面会报错。这个报错提示我们，在React使用了 lazy 之后，会存在一个加载中的空档期，React不知道在这个空档期中该显示什么内容，所以需要我们指定。接下来就要使用到Suspense 。

1. Suspense
如果在 App 渲染完成后，包含 OtherComponent 的模块还没有被加载完成，我们可以使用加载指示器为此组件做优雅降级。这里我们使用 Suspense 组件来解决。
这里将 App 组件改一改
```
import React, { Suspense, Component } from 'react';
import './App.css';

//使用React.lazy导入OtherComponent组件
const OtherComponent = React.lazy(() => import('./OtherComponent'));
export default class App extends Component {
  state = {
    visible: false
  }
  render() {
    return (
      <div className="App">
        <button onClick={() => {
          this.setState({ visible: true })
        }}>
          加载OtherComponent组件
        </button>
        <Suspense fallback={<div>Loading...</div>}>
          {
            this.state.visible
            ?
            <OtherComponent />
            :
            null
          }
        </Suspense>
      </div>
    )
  }
}
```
我们指定了空档期使用Loading展示在界面上面，等 OtherComponent 组件异步加载完毕，把 OtherComponent 组件的内容替换掉Loading上。

注意： Suspense 使用的时候， fallback 一定是存在且有内容的， 否则会报错。

### 3.forwordRef
引用传递（Ref forwading）是一种通过组件向子组件自动传递 引用ref 的技术。对于应用者的大多数组件来说没什么作用。但是对于有些重复使用的组件，可能有用。例如某些input组件，需要控制其focus，本来是可以使用ref来控制，但是因为该input已被包裹在组件中，这时就需要使用Ref forward来透过组件获得该input的引用。可以透传多层
未使用forwordRef
```
//子组件
class Child extends Component{
  componentDidMount() {
    this.props.callback(this.refs.myinput)
  }
  render(){
    return <div>
      <input type="text" ref="myinput"/>
    </div>
  }
}

//父组件
class App extends Component {
  render() {
    return (
      <div>
        <Child callback={(el)=>{
          el.focus()
        }}/>
      </div>
    )
  }
}
```

使用forwardRef
```
//子组件
const Child = forwardRef((props,ref)=>{
  return <div>
    <input type="text" ref={ref}/>
  </div>
})

//父组件
class App extends Component {
  myref = createRef()
  componentDidMount() {
    this.myref.current.focus()
  }
  render() {
    return (
      <div>
        <Child ref={this.myref}/>
      </div>
    )
  }
}
``` 

### 4.Functional Component缓存
#### 4.1 为啥起memo这个名字？
在计算机领域，记忆化是一种主要用来提升计算机程序速度的优化技术方案。它将开销较大的函数调用的返回结果存储起来，当同样的输入再次发生时，则返回缓存好的数据，以此提升运算效率。

#### 4.1 作用
组件仅在它的 props 发生改变的时候进行重新渲染。通常来说，在组件树中 React 组件，只要有变化就会走一遍渲染流程。但是React.memo()，我们可以仅仅让某些组件进行渲染。

#### 4.1 与PureComponent 区别
PureComponent 只能用于class 组件，memo 用于functional 组件

#### 4.1 用法
```
import {memo} from 'react'

const Child = memo(()=>{
  return <div>
    <input type="text" />
  </div>
})

// 或者
const Child = ()=>{
  return <div>
    <input type="text" />
  </div>
})

const MemoChild = memo(Child)
```

## 十一、dva + umi

