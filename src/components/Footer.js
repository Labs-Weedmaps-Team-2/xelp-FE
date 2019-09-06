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
  border-top: 1px solid #e6e6e6;
  background: #fafafa;
  h2 {
    font-size: 3.2rem;
  }
`
