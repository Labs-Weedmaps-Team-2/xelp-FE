import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <StyledFooter>
      <h2>Footer</h2>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  height: 80px;
  h2 {
    font-size: 1.8rem;
  }
`
