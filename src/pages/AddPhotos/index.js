import React, { useState } from 'react'
import ActiveStorageProvider from 'react-activestorage-provider'
import { useRouter } from 'hooks'
import { Navbar } from 'components'
import { apiUrl, serverUrl } from 'config'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
const AddPhotos = () => {
  const { history, match } = useRouter()
  const [srcArray, setSrcArray] = useState([])

  const handleChange = e => {
    const files = Array.from(e.target.files)
    Promise.all(
      files.map(file => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader()

          reader.onload = e => {
            resolve(e.target.result)
          }
          if (file) {
            reader.readAsDataURL(file)
          }
        })
      })
    ).then(images => {
      setSrcArray(images)
    })
  }
  return (
    <ActiveStorageProvider
      endpoint={{
        path: `${apiUrl}/business/${
          window.location.pathname.split('/addphotos/')[1]
        }`,
        model: 'Business',
        attribute: 'photos',
        method: 'PUT',
      }}
      directUploadsPath={`${serverUrl}/rails/active_storage/direct_uploads`}
      multiple={true}
      render={({ handleUpload, uploads, ready }) => (
        <StyledAddPhotos>
          <Navbar />
          <input
            type='file'
            id='photos'
            name='photos'
            multiple
            disabled={!ready}
            onChange={e => {
              handleUpload(e.currentTarget.files)
              handleChange(e)
            }}
            style={{ marginTop: '60px' }}
          />
          <div className='preview-container'>
            {srcArray.map((src, index) => (
              <div key={index} className='preview-wrap'>
                <img className='preview-img' src={src} alt='' />
              </div>
            ))}
          </div>
          {uploads.map(upload => {
            switch (upload.state) {
              case 'waiting':
                return (
                  <p key={upload.id}>Waiting to upload {upload.file.name}</p>
                )
              case 'uploading':
                return (
                  <p key={upload.id}>
                    Uploading {upload.file.name}: {upload.progress}%
                  </p>
                )
              case 'error':
                return (
                  <p key={upload.id}>
                    Error uploading {upload.file.name}: {upload.error}
                  </p>
                )
              case 'finished':
                return [
                  <p key={upload.id}>Finished uploading {upload.file.name}</p>,
                  <div key='test'>
                    <Redirect to={`/business/${match.params.id}`} />
                  </div>,
                ]
              default:
                return new Error('business photo error')
            }
          })}
        </StyledAddPhotos>
      )}
    />
  )
}

export default AddPhotos

const StyledAddPhotos = styled.div`
  .preview-container {
    display: flex;
  }

  .preview-wrap {
    width: 200px;
    height: 200px;
  }

  .preview-img {
    width: 100%;
    height: 100%;
    object-fit: center;
    object-position: center;
  }
`
