import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <StyledFooter>
      <h2>Footer</h2>
      <p>2019 Xelp</p>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  border-top: 1px solid #e6e6e6;
  background: lightgray;
  h2 {
    font-size: 3.2rem;
  }
`
