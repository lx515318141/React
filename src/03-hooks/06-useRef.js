import React, {useState, useCallback, useRef} from 'react'

export default function App() {
  const myText = useRef()
  // useRef的第二个功能，可以像useState一样存储变量，不会每次重新加载都被赋值为0
  var mycount = useRef(0)

  const [count, setCount] = useState(0)
  const [list, setList] = useState(['html', 'css', 'js'])


  const addHandler = useCallback(() => {
    console.log(myText.current.value)
    setList([...list, myText.current.value])
    myText.current.value = ''
  }, [list, myText])

  const delHandler = useCallback((index) => {
    let newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }, [list])

  return (
    <div>
      <button onClick={() => {
        setCount(count + 1)
        mycount.current ++
      }}>add1</button>
      <span>{count}-{mycount.current}</span>
      <br></br>
      <input type='text' ref={ myText } />
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
