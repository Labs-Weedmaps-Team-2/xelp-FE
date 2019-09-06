import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  color: white;
  font-weight: bolder;
`;

export const Navbar = () => {
  return (
    <StyledNavHeader>
      <StyledLink to='/'>Home</StyledLink>
      <StyledLink to='/sign-in'>Sign In</StyledLink>
      <StyledLink to='/profile'>Profile</StyledLink>
      <StyledLink to='/business-list'>Businesses</StyledLink>
    </StyledNavHeader>
  )
}

const StyledNavHeader = styled.nav`
  background: transparent;
  position:fixed;
  left:0;
  top:0;
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  a {
    font-size: 1.8rem;
    margin-left: 2rem;
}
`
