import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Navbar } from 'components'
import { ProfileAvatar, ProfileForm } from './components'

const Profile = () => {
  const user = useSelector(state => state.user)

  return (
    <>
      <Navbar />
      <Container>
        <ProfileAvatar {...user} />
        <ProfileForm {...user} />
      </Container>
    </>
  )
}

export default Profile

const Container = styled.div`
  border: 1px solid dodgerblue;
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 90px auto;
  max-width: 400px;
`
