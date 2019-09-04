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
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  h2 {
    font-size: 1.8rem;
  }
`
