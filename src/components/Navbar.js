import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useRouter } from 'hooks'

const StyledLink = styled(Link)`
  font-weight: bolder;
`

export const Navbar = () => {
  const { location } = useRouter()
  return (
    <StyledNavHeader location={location}>
      <StyledLink to='/'>Home</StyledLink>
      <StyledLink to='/sign-in'>Sign In</StyledLink>
      <StyledLink to='/profile'>Profile</StyledLink>
      <StyledLink to='/business-list'>Businesses</StyledLink>
    </StyledNavHeader>
  )
}

const StyledNavHeader = styled.nav`
  background: transparent;
  position: fixed;
  left: 0;
  top: 0;
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;

  a {
    color: ${props =>
      props.location.pathname.includes('profile') ? 'black' : 'white'};
    font-size: 1.8rem;
    margin-left: 5rem;
  }
`
const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
`
