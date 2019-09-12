import React from 'react'
import ActiveStorageProvider from 'react-activestorage-provider'
import { Nav } from 'components'
import { apiUrl, serverUrl } from 'config'

const AddPhotos = () => {
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
        <div>
          <Nav />
          <input
            type='file'
            id='photos'
            name='photos'
            multiple
            disabled={!ready}
            onChange={e => handleUpload(e.currentTarget.files)}
            style={{ marginTop: '60px' }}
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
              default:
                return new Error('business photo error')
            }
          })}
        </div>
      )}
    />
  )
}

export default AddPhotos
