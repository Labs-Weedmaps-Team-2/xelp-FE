import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { uploadUserImage } from 'actions'

const ProfileAvatar = props => {
  const dispatch = useDispatch()
  const [avatarSrc, setSrc] = useState(null)

  const handleFile = e => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onloadend = () => {
      setSrc(reader.result)
      const formData = new FormData()
      formData.append('user[avatar]', file)
      dispatch(uploadUserImage(props.id, formData))
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  return (
    <StyledProfileAvatar>
      <div className='panel-left'>
        <img
          className='profile-image'
          src={props.avatar ? props.avatar : props.photo}
          alt='avatar'
        />
      </div>
      <div className='panel-right'>
        <p className='username'>{props.username}</p>
        <form>
          <label className='edit-photo-label' htmlFor='edit-photo-input'>
            Change Profile Photo
          </label>
          <input
            id='edit-photo-input'
            type='file'
            name='avatarFile'
            onChange={handleFile}
          />
        </form>
      </div>
    </StyledProfileAvatar>
  )
}

export default ProfileAvatar

const StyledProfileAvatar = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  margin: 0px 0px 20px;
  width: 320px;

  .panel-left {
    /* border: 1px solid green; */
    width: 50px;
    height: 50px;

    .profile-image {
      /* border: 1px solid red; */
      width: 100%;
      border-radius: 50%;
    }
  }

  .panel-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;

    .username {
      margin: 0px 0px 5px;
    }

    .edit-photo-label {
      font-size: 1.4rem;
      color: #3897f0;
      font-weight: bold;
    }

    #edit-photo-input {
      display: none;
    }
  }
`
