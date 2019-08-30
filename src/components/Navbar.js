import React from 'react'
import styled from 'styled-components'
import SignIn from 'pages/SignIn'

const Navbar = () => {
  return (
    <StyledNav>
      <SignIn />
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
