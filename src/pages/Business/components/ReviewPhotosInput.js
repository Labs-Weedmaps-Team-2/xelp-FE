import React, { useState } from 'react'
import { DirectUploadProvider } from 'react-activestorage-provider'
import { api } from 'apis'
import { serverUrl } from 'config'
import { useRouter } from 'hooks'

const AddPhotos = ({ text, rating, yelp_id, id, editing }) => {
  const { history } = useRouter()
  const [srcArray, setSrcArray] = useState([])
  const handleAttachment = signedIds => {
    const body = {
      review: { text, rating, photos: signedIds },
    }
    editing
      ? api
          .patch(`/reviews/${id}`, body)
          .then(res => {
            history.push(`/business/${yelp_id}`)
          })
          .catch(err => {
            history.push(`/business/${yelp_id}`)
          })
      : api.post(`business/${yelp_id}/review`, body).then(res => {
          history.push(`/business/${yelp_id}`)
        })
  }

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
    <DirectUploadProvider
      onSuccess={handleAttachment}
      directUploadsPath={`${serverUrl}/rails/active_storage/direct_uploads`}
      multiple
      srcArray={srcArray}
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
            onChange={e => {
              handleChooseFiles(e.currentTarget.files)
              handleChange(e)
            }}
          />
          <button
            className='btn-submit'
            onClick={e => {
              e.preventDefault()
              handleBeginUpload()
            }}
          >
            {editing ? 'Submit Edit' : 'Submit Review'}
          </button>
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
                return (
                  <p key={upload.id}>Finished uploading {upload.file.name}</p>
                )
              default:
            }
          })}
        </div>
      )}
    />
  )
}

export default AddPhotos
