import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <StyledNav>
      <h1>NavBar</h1>
    </StyledNav>
  )
}

export default Navbar

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  h1 {
    font-size: 1.8rem;
  }
`
