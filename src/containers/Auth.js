import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import DownSvg from 'assets/svg/DownSvg'
import useOnClickOutside from 'use-onclickoutside'
import { AvatarPopup } from 'components'
import { Link } from 'react-router-dom'

export const Auth = () => {
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
          {isMenuOpen ? <AvatarPopup /> : null}
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
