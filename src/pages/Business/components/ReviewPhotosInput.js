import React from 'react'
import { DirectUploadProvider } from 'react-activestorage-provider'
import { api } from 'apis'
import { serverUrl } from 'config'

const AddPhotos = ({ text, rating, yelp_id, uploadStatus }) => {
  const handleAttachment = signedIds => {
    console.log(signedIds, 'here')
    const body = {
      review: { text, rating, photos: signedIds },
    }
    api.post(`/business/${yelp_id}/review`, body).then(res => {
      console.log(res)
    })
  }

  console.log(text, rating, yelp_id)
  return (
    <DirectUploadProvider
      onSuccess={handleAttachment}
      directUploadsPath={`${serverUrl}/rails/active_storage/direct_uploads`}
      multiple
      render={({
        handleUpload,
        uploads,
        ready,
        handleChooseFiles,
        handleBeginUpload,
      }) => (
        <div>
          <input
            type='file'
            id='review'
            name='photos'
            multiple
            disabled={!ready}
            onChange={e => handleChooseFiles(e.currentTarget.files)}
            style={{ marginTop: '60px' }}
          />
          <button type='submit' onClick={handleBeginUpload}>
            SUBMIT!
          </button>

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
