import React, {useState} from 'react'

export default function App() {
  const [text, setText] = useState('')
  const [list, setList] = useState(['html', 'css', 'js'])
  const addHandler = () => {
    setList([...list, text])
    setText('')
  }
  const changeHandler = (evt) => {
    console.log(evt.target.value)
    setText(evt.target.value)
  }
  const delHandler = (index) => {
    let newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }
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
