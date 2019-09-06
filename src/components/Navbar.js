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
    </StyledNavHeader>
  )
}

const StyledNavHeader = styled.nav`
  width: 100%;
  background: ${props =>
    props.location.pathname === '/' ? 'transparent' : '#FAFAFA'};
  position: fixed;
  left: 0;
  top: 0;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  z-index: 30;
  border-bottom: ${props =>
    props.location.pathname === '/' ? 'none' : '1px solid #e6e6e6'};

  a {
    color: ${props => (props.location.pathname === '/' ? 'white' : 'black')};
    font-size: 1.8rem;
    margin-left: 5rem;
    &:hover {
      text-decoration: none;
    }
  }
`
