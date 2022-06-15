import React, { useReducer, useContext } from 'react'

const GlobalContext = React.createContext()

const reducer = (prevState, action) => {
  let newState = { ...prevState }
  switch (action.type) {
    case 'changeA':
      newState.a = action.value
      return newState
    case 'changeB':
      newState.b = action.value
      return newState
    default:
      return newState;
  }
}

const intialState = {
  a: '111',
  b: '222'
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, intialState)
  return (
    <GlobalContext.Provider value={
      {
        state,
        dispatch
      }
    }>
      <div>
        <Child1></Child1>
        <Child2></Child2>
        <Child3></Child3>
      </div>
    </GlobalContext.Provider>
  )
}

function Child1() {
  const { dispatch } = useContext(GlobalContext)
  return (
    <div>
      <button onClick={() => {
        dispatch({
          type: 'changeA',
          value: '222'
        })
      }}>a</button>
      <button onClick={() => {
        dispatch({
          type: 'changeB',
          value: '333'
        })
      }}>b</button>
    </div>
  )
}

function Child2() {
  const { state } = useContext(GlobalContext)
  return (
    <div>
      child-a-{state.a}
    </div>
  )
}

function Child3() {
  const { state } = useContext(GlobalContext)
  return (
    <div>
      child-b-{state.b}
    </div>
  )
}