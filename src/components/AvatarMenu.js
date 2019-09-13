import React, { useState, useRef } from 'react'
import useOnClickOutside from 'use-onclickoutside'
import DownSvg from 'assets/svg/DownSvg'
import styled from 'styled-components'
import { AvatarPopup } from 'components'

export const AvatarMenu = ({ user }) => {
  const popupRef = useRef()
  const [isMenuOpen, setMenu] = useState(false)
  useOnClickOutside(popupRef, () => setMenu(false))

  return (
    <StyledAvatarMenu ref={popupRef}>
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
      {isMenuOpen ? <AvatarPopup user={user} /> : null}
    </StyledAvatarMenu>
  )
}

const StyledAvatarMenu = styled.div`
  position: relative;
  height: 40px;
  width: 60px;
  cursor: pointer;
  border-radius: 4px;
  background: rgba(51, 51, 51, 0.25);
  &:hover {
    background: rgba(51, 51, 51, 0.4);
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
