import React from 'react'
import ActiveStorageProvider from 'react-activestorage-provider'
import { DirectUploadProvider } from 'react-activestorage-provider'

const AddPhotos = () => {
  // const getToken = () => {
  //   console.log('here')
  //   const meta = document.querySelector(`meta[name="csrf-token"]`)
  //   console.log('here', meta)

  //   return meta && meta.getAttribute('content')
  // }

  // const csrfHeader = () => {
  //   console.log('down here')

  //   const token = getToken()
  //   console.log('token', token)
  //   return token ? { 'x-csrf-token': token } : {}
  // }
  // const handleChange = () => {
  //   console.log('called')

  //   csrfHeader()
  // }

  // return (
  //   <div>
  //     <input
  //       onChange={handleChange}
  //       id='photos'
  //       name='photos'
  //       type='file'
  //       data-direct-upload-url='http://localhost:3000/rails/active_storage/direct_uploads'
  //       multiple
  //     />
  //   </div>
  // )
  return (
    <ActiveStorageProvider
      endpoint={{
        path: '/api/v1/businesses/1',
        model: 'Business',
        attribute: 'photos',
        method: 'PUT',
        port: '3000',
        protocol: 'http',
      }}
      directUploadsPath='http://localhost:3000/rails/active_storage/direct_uploads'
      onSubmit={user => console.log('ON_SUBMIT‼️🥶', user)}
      onBeforeBlobRequest={res => console.log('here', res)}
      onBeforeStorageRequest={res => console.log('b4 storage request', res)}
      render={({ handleUpload, uploads, ready }) => (
        <div>
          <input
            type='file'
            id='photos'
            name='photos'
            multiple
            disabled={!ready}
            onChange={e => handleUpload(e.currentTarget.files)}
          />

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
                return (
                  <p key={upload.id}>Finished uploading {upload.file.name}</p>
                )
            }
          })}
        </div>
      )}
    />
  )
}

export default AddPhotos
