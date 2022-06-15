import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'

export default function App() {
  const [myText, setMyText] = useState('')
  const [cinemaList, setCinemaList] = useState([])

  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=562387',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16523749951187425313357825","bc":"440300"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      },
      method: 'get'
    }).then((res) => {
      console.log(res.data.data)
      setCinemaList(res.data.data.cinemas)
    })
  }, [])

  const searchHandler = useMemo(() =>
    cinemaList.filter(item => item.name.toUpperCase().includes(myText.toUpperCase()) || item.address.toUpperCase().includes(myText.toUpperCase()))
  , [cinemaList, myText])

  return (
    <div>
      <input type='text' onChange={(evt) => {
        setMyText(evt.target.value)
      }} />
      <div className='wrapper'>
        <ul className='cinemaList'>
          {
            searchHandler.map((item) => <li key={item.cinemaId}>
              <p className='name'>{item.name}</p>
              <p className='address'>{item.address}</p>
            </li>)
          }
        </ul>
      </div>
    </div>
  )
}

