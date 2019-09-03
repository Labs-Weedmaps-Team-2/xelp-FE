import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <StyledNav>
      <Link to='/'>Home</Link>
      <Link to='/sign-in'>Sign In</Link>
      <Link to='/profile'>Profile</Link>
      <Link to='/business-list'>BusinessList</Link>
    </StyledNav>
  )
}

export default Navbar

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  a {
    font-size: 1.8rem;
    margin-left: 2rem;
  }
`
