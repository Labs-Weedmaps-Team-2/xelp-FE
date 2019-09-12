import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AvatarMenu } from 'components'
import styled from 'styled-components'

export const Auth = () => {
  const user = useSelector(({ user }) => user)

  const renderAuth = () => {
    if (user.loading) {
      return null
    }

    if (user.id) {
      return <AvatarMenu user={user} />
    } else {
      return (
        <Link className='signin' to='/sign-in'>
          Sign In
        </Link>
      )
    }
  }
  // TODO: Clean up loading v. signin/logout logic
  return <StyledAuth>{renderAuth()}</StyledAuth>
}

const StyledAuth = styled.div`
  .signin {
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
  }
`
