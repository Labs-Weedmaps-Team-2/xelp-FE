import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SignIn from 'pages/SignIn'

const Navbar = () => {
  return (
    <StyledNav>
      <Link to='/sign-in'>Sign In</Link>
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
