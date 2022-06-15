import React, { Component } from 'react'
import axios from 'axios'

export default class ComingSoon extends Component {
  state = {
    list: []
  }
  componentDidMount = () => {
    this.getList()
  }

  getList = () => {
    axios.get('/ajax/comingList?ci=30&limit=10&movieIds=&token=&optimus_uuid=11F5DF00DB7711EC9FE64975ACF4C9B5924FCE4602E64F15A8519E82AFC9F5CD&optimus_risk_level=71&optimus_code=10').then((res) => {
      console.log(res)
    })
  }

  render() {
    return (
      <div>
        comingSoon
      </div>
    )
  }
}

