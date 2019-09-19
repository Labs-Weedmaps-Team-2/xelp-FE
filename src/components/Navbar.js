import React from 'react'
import styled from 'styled-components'
import { Logo } from 'components'
import { SearchBar, Auth } from 'containers'

export const Navbar = () => {
  return (
    <StyledNavbar>
      <div className='search-container'>
        <Logo />
        <SearchBar />
        <div className='auth-wrapper'>
          <Auth />
        </div>
      </div>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  display: flex;
  position: sticky;
  z-index: 100;
  top: 0;
  align-items: center;
  background-color: #558c8c;
  width: 100%;
  height: 65px;
  .search-container {
    display: flex;
    align-items: center;
    max-width: 1020px;
    margin: 0 auto;
    height: 100%;
  }
  .auth-wrapper {
    margin-left: 25px;
  }
`
