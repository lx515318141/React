import { NavBar } from 'antd-mobile'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import getCinemaListActionCreator from '../redux/actionCreator/getCinemaListActionCreator'
import store from '../redux/store'
import { SearchOutline } from 'antd-mobile-icons'

function Cinemas(props) {
  let { list, getCinemaListActionCreator } = props
  useEffect(() => {
    if (list.length === 0) {
      getCinemaListActionCreator()
    }
  }, [list, getCinemaListActionCreator])

  return (
    <div className='cinemas'>
      {/* <div style={{ display: 'flex', width: '100vw', justifyContent: 'space-between' }}>
        <div onClick={() => {
          props.history.push('/city')
        }}>{props.cityName}</div>
        <div onClick={() => {
          props.history.push('/cinemas/search')
        }}>搜索</div>
      </div> */}
      <NavBar back={null} left={<div onClick={() => {
        props.history.push('/city')
      }}>{props.cityName}</div>} right={<SearchOutline onClick={() => {
        props.history.push('/cinemas/search')
      }}></SearchOutline>}>
        影院
      </NavBar>
      <ul>
        {
          props.list.map(item => <li key={item.cinemaId} style={{ marginBottom: '20px', paddingLeft: '10px' }}>
            <p className='name'>{item.name}</p>
            <p className='address' style={{ fontSize: '14px', color: 'gray' }}>{item.address}</p>
          </li>)
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    list: state.CinemaListReducer.list,
    cityName: state.CityReducer.cityName
  }
}

const mapDispatchToProps = {
  getCinemaListActionCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(Cinemas)
