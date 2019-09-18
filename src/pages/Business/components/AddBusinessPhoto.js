import React, { useState } from 'react'
import { DirectUploadProvider } from 'react-activestorage-provider'
import { api } from 'apis'
import { serverUrl } from 'config'
import { useRouter } from 'hooks'

const AddBusinessPhotoInput = ({ values }) => {
  const { history } = useRouter()
  const [fileSrc, setFileSrc] = useState(null)
  const handleAttachment = signedIds => {
    const body = {
      business: { ...values, image_url: signedIds[0] },
    }
    api.post(`/business`, body).then(res => {
      console.log(res)
      history.push(`/business/${res.data.yelp_id}`)
    })
    console.log('handling these attachments after directUploading')
  }

  const handleChange = e => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onloadend = e => {
      console.log(e.target.result, 'result')
      setFileSrc(e.target.result)
    }
    if (file) {
      reader.readAsDataURL(file)
    }
  }
  // const renderImage = e => {
  //   const reader = new FileReader()

  //   reader.onloadend = e => {
  //     setFile(e.target.result)
  //   }
  //   return file
  // }
  console.log('log values obj', values)
  return (
    <DirectUploadProvider
      onSuccess={handleAttachment}
      directUploadsPath={`${serverUrl}/rails/active_storage/direct_uploads`}
      render={({
        handleUpload,
        uploads,
        ready,
        handleChooseFiles,
        handleBeginUpload,
      }) => (
        <div>
          <div
            className='preview-wrap'
            style={{
              height: 200,
              display: 'flex',
              justifyContent: 'space-between',
              border: '1px solid green',
            }}
          >
            <input
              type='file'
              id='review'
              name='photos'
              disabled={!ready}
              onChange={e => {
                handleChooseFiles(e.currentTarget.files)
                handleChange(e)
              }}
            />
            {fileSrc && (
              <div className='image-wrap' style={{ height: 200, width: 200 }}>
                <img
                  src={fileSrc}
                  style={{ width: '100%', height: '100%' }}
                  alt=''
                />
              </div>
            )}
          </div>
          <button
            className='business-btn'
            onClick={e => {
              e.preventDefault()
              handleBeginUpload()
            }}
          >
            SUBMIT!!
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
              default:
            }
          })}
        </div>
      )}
    />
  )
}

export default AddBusinessPhotoInput
