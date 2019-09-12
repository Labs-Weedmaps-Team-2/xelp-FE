import React from 'react'
import { authUrl } from 'config'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const AvatarPopup = () => {
  const user = useSelector(({ user }) => user)
  return (
    <StyledAvatarPopup>
      <div className='arrow-up'></div>
      <div className='user-details'>
        <div className='avatar-wrapper'>
          <Link to='profile'>
            <img
              className='avatar-image'
              src={user.avatar || user.photo}
              alt='avatar'
            />
          </Link>
        </div>
        <div className='user-info'>
          <Link to='/profile' className='username'>
            {user.username}
          </Link>
          {/* // TODO: Add dynamic user location to user model */}
          <p className='location'>Los Angeles, CA</p>
        </div>
      </div>
      <Link className='settings' to='/profile'>
        Account Settings
      </Link>
      <a className='logout' href={`${authUrl}/logout`}>
        Logout
      </a>
    </StyledAvatarPopup>
  )
}

const StyledAvatarPopup = styled.div`
  position: absolute;
  cursor: default;
  width: 220px;
  height: 180px;
  top: 0;
  right: 0;
  z-index: 50;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 12px;
  margin-top: 50px;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
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
  .user-details {
    display: flex;
    padding-bottom: 16px;
    border-bottom: 1px solid #e6e6e6;
  }
  .avatar-wrapper {
    width: 60px;
    height: 60px;
  }
  .avatar-image {
    width: 100%;
    border-radius: 4px;
  }
  .user-info {
    margin-left: 10px;
  }
  .username {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: #0077b3;
    margin-bottom: 5px;
    &:hover {
      text-decoration: underline;
    }
  }
  .location {
    font-size: 12px;
    font-weight: bold;
  }
  .logout,
  .settings {
    color: #0073bb;
    display: block;
    cursor: pointer;
    padding-bottom: 12px;
    &:hover {
      text-decoration: underline;
    }
  }
  .settings {
    margin-top: 12px;
    border-bottom: 1px solid #e6e6e6;
    font-weight: bold;
  }
  .logout {
    padding-top: 12px;
  }
`
