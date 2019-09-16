import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="container center">
        <a href="https://github.com/Labs-Weedmaps-Team-2/xelp-FE/blob/master/README.md#Team">meet the team</a>
        <a href="https://github.com/Labs-Weedmaps-Team-2"><i class="fab fa-github-square"></i></a>
        <p>©2019 <span>Xelp</span></p>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row;
  height: 200px;
  border-top: 1px solid #e6e6e6;
  background: lightgray;
  .container {
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }
`
