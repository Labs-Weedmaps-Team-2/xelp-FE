import React from 'react'
import { useSelector } from 'react-redux'
import { Navbar } from 'components'
import { UserProfile } from './components'

const Profile = () => {
  const user = useSelector(state => state.user)
  return (
    <>
      <Navbar />
      <UserProfile {...user} />
    </>
  )
}

export default Profile
