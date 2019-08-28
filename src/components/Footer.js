import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter>
      <h2>Footer</h2>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;

  h2 {
    font-size: 1.8rem;
  }
`
