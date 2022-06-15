import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {

  render() {
    const StyledInput = styled.input`
      border-radius: 10px;
      border-bottom: 1px solid red;
      out-line: none;
    `
    const StyledDiv = styled.div`
      background: ${props => props.bg || 'red'};
      width: 100px;
      height: 100px;
    `

    return (
      <div>
        <StyledInput type='password' placeholder='请输入'/>
        <StyledDiv bg='yellow'></StyledDiv>
      </div>
    )
  }
}
