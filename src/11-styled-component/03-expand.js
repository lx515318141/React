import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {
  render() {
    const StyledButton = styled.button`
      width: 200px;
      height: 50px;
      background: red;
    `
    const StyledButton1 = styled(StyledButton)`
      background: yellow;
    `

    const StyledButton2 = styled(StyledButton)`
      background: blue;
    `
    return (
      <div>
        App
        <StyledButton></StyledButton>
        <StyledButton1></StyledButton1>
        <StyledButton2></StyledButton2>
      </div>
    )
  }
}
