import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import DownSvg from 'assets/svg/DownSvg'
import useOnClickOutside from 'use-onclickoutside'
import { authUrl } from 'config'

export const Navbar = () => {
  const popupRef = useRef()
  const [isMenuOpen, setMenu] = useState(false)
  useOnClickOutside(popupRef, () => setMenu(false))

  const user = useSelector(({ user }) => user)

  // TODO: Clean up loading v. signin/logout logic
  return (
    <StyledNavHeader>
      {user.loading ? null : user.id ? (
        <div className='menu-avatar' ref={popupRef}>
          <div className='image-arrow' onClick={() => setMenu(prev => !prev)}>
            <img
              className='menu-image'
              src={user.avatar || user.photo}
              alt='avatar'
            />
            <div className='menu-arrow-wrapper'>
              <DownSvg />
            </div>
          </div>
          {isMenuOpen ? (
            <div className='menu-popup'>
              <div className='arrow-up'></div>

              <a className='logout' href={`${authUrl}/logout`}>
                Logout
              </a>
            </div>
          ) : null}
        </div>
      ) : (
        <StyledLink to='/sign-in'>Sign In</StyledLink>
      )}
    </StyledNavHeader>
  )
}

const StyledNavHeader = styled.nav`
  .menu-avatar {
    position: relative;
    height: 40px;
    width: 60px;
    cursor: pointer;
    border-radius: 4px;
    background: rgba(51, 51, 51, 0.25);
    &:hover {
      background: rgba(51, 51, 51, 0.4);
    }
  }
  .image-arrow {
    display: flex;
    align-items: center;
  }
  .menu-image {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    width: 40px;
  }
  .menu-arrow-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 40px;
  }
  .menu-popup {
    position: absolute;
    width: 200px;
    height: 250px;
    top: 0;
    right: 0;
    z-index: 50;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    padding: 12px;
    margin-top: 50px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  .arrow-up {
    position: absolute;
    top: -10px;
    right: 15%;
    width: 0;
    height: 0;
    z-index: 60;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
  }
  .logout {
    color: #0073bb;
    display: block;
    cursor: pointer;
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid #e6e6e6;
    &:hover {
      text-decoration: underline;
    }
  }
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 40px;
  border: 2px solid #ffffff;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  color: white;
  transition: all 0.6s;
  &:hover {
    color: #666;
    background: #fff;
  }
`
