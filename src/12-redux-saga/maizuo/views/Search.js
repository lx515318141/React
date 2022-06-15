import React, { useEffect, useState, useMemo } from 'react'
import store from '../redux/store'
import getCinemaListActionCreator from '../redux/actionCreator/getCinemaListActionCreator'

export default function Search() {
  const [cinemaList, setCinemaList] = useState(store.getState().CinemaListReducer.list)
  const [myText, setMyText] = useState('')

  useEffect(() => {
    if (store.getState().CinemaListReducer.list.length === 0) {
      store.dispatch(getCinemaListActionCreator())
    }
    var unsubscribe = store.subscribe(() => {
      console.log(1)
      setCinemaList(store.getState().CinemaListReducer.list)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  function useFilter(cinemaList, myText) {
    const filterList = useMemo(() =>
      cinemaList.filter(item => item.name.toUpperCase().includes(myText.toUpperCase()) || item.address.toUpperCase().includes(myText.toUpperCase()))
      , [cinemaList, myText])
  
    return { filterList }
  }

  const { filterList } = useFilter(cinemaList, myText)

  return (
    <div>
      <input type='text' onChange={(evt) => {
        setMyText(evt.target.value)
      }}/>
      <ul>
        {
          filterList.map(item => <li key={item.cinemaId} style={{ marginBottom: '20px', paddingLeft: '10px' }}>
            <p className='name'>{item.name}</p>
            <p className='address' style={{ fontSize: '14px', color: 'gray' }}>{item.address}</p>
          </li>)
        }
      </ul>
    </div>
  )
}
