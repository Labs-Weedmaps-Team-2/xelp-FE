import React, { useState } from 'react'
import styled from 'styled-components'
import { api } from 'apis'
import { serverUrl } from 'config'

const ProfileAvatar = props => {
  const [avatarFile, setFile] = useState(null)
  const [avatarSrc, setSrc] = useState(null)

  const handleFile = e => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onloadend = () => {
      setFile(file)
      setSrc(reader.result)
      const formData = new FormData()
      formData.append('user[avatar]', file)
      api.put(`/users/${props.id}`, formData).then(res => console.log(res))
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('post[avatar]', avatarFile)
  }

  return (
    <>
      <StyledProfileAvatar>
        <div className='panel-left'>
          <img
            className='profile-image'
            src={
              props.avatarUrl ? `${serverUrl}/${props.avatarUrl}` : props.photo
            }
            alt='avatar'
          />
        </div>
        <div className='panel-right'>
          <p className='username'>{props.username}</p>
          <form onSubmit={handleSubmit}>
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
        <Preview>
          {avatarSrc && (
            <img className='preview-img' src={avatarSrc} alt='preview' />
          )}
        </Preview>
      </StyledProfileAvatar>
    </>
  )
}

export default ProfileAvatar

const StyledProfileAvatar = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  margin: 0px 0px 20px;

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

const Preview = styled.div`
  /* border: 1px solid red; */
  width: 50px;
  height: 50px;
  margin-left: 80px;

  .preview-img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`
