import React from 'react'
import styled from 'styled-components'
const UserProfile = () => {
  return (
    <StyledProfile className="profile-container">
      <h1>User Profile</h1>
    </StyledProfile>
  )
}

export default UserProfile

const StyledProfile = styled.div`
  height: 600px;
`