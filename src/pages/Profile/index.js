import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ProfileDetails, ProfileForm } from './components'
import axios from 'api/axiosApi'

const Profile = props => {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    photo: {
      url: '',
    },
  })

  useEffect(() => {
    axios
      .get(`/users/1`)
      .then(res => {
        setProfile({ ...res.data })
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <Container>
      <ProfileDetails username={profile.username} photo={profile.photo.url} />
      <ProfileForm />
    </Container>
  )
}

export default Profile

const Container = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 0 auto;
  max-width: 400px;
`
