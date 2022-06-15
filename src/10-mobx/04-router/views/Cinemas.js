import { autorun } from 'mobx'
import React, { useEffect, useState } from 'react'
import store from '../mobx/store'
import { Observer } from 'mobx-react'

export default function Cinemas(props) {
  const [list, setList] = useState([])

  useEffect(() => {
    if (store.list.length === 0) {
      store.getList()
    }

    // var unsubscribe = autorun(() => {
    //   setList(store.list)
    // })

    return () => {
      // unsubscribe()
    }
  }, [])

  return (
    <Observer>
      {
        () => {
          return store.list.map(item => <li key={item.cinemaId} style={{ marginBottom: '20px', paddingLeft: '10px' }}>
            <p className='name'>{item.name}</p>
            <p className='address' style={{ fontSize: '14px', color: 'gray' }}>{item.address}</p>
          </li>)
        }
      }
    </Observer>
  )
}
