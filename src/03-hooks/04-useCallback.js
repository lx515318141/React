import React, {useState, useCallback} from 'react'

export default function App() {
  const [text, setText] = useState('')
  const [list, setList] = useState(['html', 'css', 'js'])

  // 如果传入的数组是空数组，函数每次执行的时候执行的都是最初缓存的函数里面的变量也都是最初的变量
  // 如果想让函数既能缓存，又能在适当的时候用新的函数，就需要将在函数中使用到的state放入数组
  // useCallback的作用就是当组件中其他和该函数无关的state改变是该函数不会重新定义，只有在和该函数相关的state改变是才会更新
  const addHandler = useCallback(() => {
    setList([...list, text])
    setText('')
  }, [list, text])

  const changeHandler = useCallback((evt) => {
    console.log(evt.target.value)
    setText(evt.target.value)
  }, [])

  const delHandler = useCallback((index) => {
    let newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }, [list])

  return (
    <div>
      <input type='text' onChange={changeHandler} value={text} />
      <button onClick={addHandler}>add</button>
      <ul>
        {
          list.map((item, index) => <li key={item}>
            {item}
            <button onClick={() => {
              delHandler(index)
            }}>del</button>
          </li>)
        }
      </ul>
      { !list.length && <span>暂无数据</span> }
    </div>
  )
}
