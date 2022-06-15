import React, { useState } from 'react'
import { connect } from 'react-redux'

function City(props) {
  const [list, setList] = useState(['北京', '上海', '广州', '深圳'])
  console.log(props.history)
  return (
    <div>
      city
      <ul>
        {
          list.map(item => <li key={item} onClick={() => {
            props.changeCity(item)
            props.history.goBack()
          }}>{item}</li>)
        }
      </ul>
    </div>
  )
}

const mapDispatchToProps = {
  changeCity(item) {
    return {
      type: 'changeCity',
      payload: item
    }
  }
}
export default connect(null, mapDispatchToProps)(City)