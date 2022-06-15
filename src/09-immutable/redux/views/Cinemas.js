import React, { useEffect, useState } from 'react'
import getCinemaListActionCreator from '../redux/actionCreator/getCinemaListActionCreator'
import store from '../redux/store'

export default function Cinemas(props) {
  const [cityName, setcityName] = useState(store.getState().CityReducer.cityName)
  const [list, setList] = useState(store.getState().CinemaListReducer.list)

  useEffect(() => {
    console.log(store.getState().CityReducer, 'cinema')
    if (store.getState().CinemaListReducer.list.length === 0) {
      store.dispatch(getCinemaListActionCreator())
    }
    var unsubscribe = store.subscribe(() => {
      console.log(1)
      setList(store.getState().CinemaListReducer.list)
    })

    return () => {
      unsubscribe(store.getState().CityReducer)
    }
  }, [])
  

  return (
    <div>
      <div style={{ display: 'flex', width: '100vw', justifyContent: 'space-between' }}>
        <div onClick={() => {
          props.history.push('/city')
        }}>{cityName}</div>
        <div onClick={() => {
          props.history.push('/cinemas/search')
        }}>搜索</div>
      </div>

      Cinemas
      <ul>
        {
          list.map(item => <li key={item.cinemaId} style={{ marginBottom: '20px', paddingLeft: '10px' }}>
            <p className='name'>{item.name}</p>
            <p className='address' style={{ fontSize: '14px', color: 'gray' }}>{item.address}</p>
          </li>)
        }
      </ul>
    </div>
  )
}
