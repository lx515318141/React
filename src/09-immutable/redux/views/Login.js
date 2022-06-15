import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'


export default function Login() {
  var text = useRef('')

  const history = useHistory()

  return (
    <div>
      <input type='text' ref={text} />
      <button onClick={() => {
        console.log(text)
        if (text.current.value) {
          localStorage.setItem('token', text.current.value)
          history.push('/center')
        }
      }}>登录</button>
    </div>
  )
}
