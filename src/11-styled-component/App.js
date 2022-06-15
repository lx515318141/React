import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {

  render() {
    const StyledFooter = styled.footer`
    background: yellow;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    li {
      flex: 1;
      list-style: none;
      text-align: center;
      &:hover {
        background: red;
      }
    }
  `
    return (
      <div>
        <StyledFooter>
          <li>首页</li>
          <li>列表</li>
          <li>我的</li>
        </StyledFooter>
      </div>
    )
  }
}
