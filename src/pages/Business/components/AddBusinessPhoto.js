import React, { useState } from 'react'
import { DirectUploadProvider } from 'react-activestorage-provider'
import { api } from 'apis'
import { serverUrl } from 'config'
import { useRouter } from 'hooks'
import styled from 'styled-components'
import { toast } from 'react-toastify'

const AddBusinessPhotoInput = ({ values }) => {
  const { history, match } = useRouter()
  const [fileSrc, setFileSrc] = useState(null)
  const handleAttachment = signedIds => {
    const body = {
      business: { ...values, img_url: signedIds[0] },
    }
    api
      .post(`/business`, body)
      .then(res => {
        toast('Photo uploaded!', { autoClose: 1000 })
        setTimeout(() => {
          toast.dismiss()
          history.push(`/business/${res.data.yelp_id}`)
        }, 1000)
      })
      .catch(err => {
        toast('Photo failed to upload! Try again!', { autoClose: 3000 })
      })
  }

  const notify = () => toast('Uploading Business data')
  const handleChange = e => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onloadend = e => {
      setFileSrc(e.target.result)
    }
    if (file) {
      reader.readAsDataURL(file)
    }
  }

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
        <StyledImagePreview>
          <div className='preview-wrap'>
            <label className='preview-label' htmlFor='review'>
              {fileSrc && (
                <div className='image-wrap'>
                  <img src={fileSrc} className='preview-image' alt='' />
                </div>
              )}
              Upload Business Photo
            </label>

            <input
              type='file'
              id='review'
              accept='image/*'
              className='preview-input'
              required
              name='photos'
              disabled={!ready}
              onChange={e => {
                handleChooseFiles(e.currentTarget.files)
                handleChange(e)
              }}
            />
          </div>
          <button
            className='business-btn'
            onClick={e => {
              e.preventDefault()
              handleBeginUpload()
              notify()
            }}
          >
            Submit
          </button>
        </StyledImagePreview>
      )}
    />
  )
}

export default AddBusinessPhotoInput

const StyledImagePreview = styled.div`
  height: 210px;
  .preview-wrap {
    height: 190px;
    display: flex;
    justify-content: center;
    border: 1px dotted #666;
  }
  .preview-label {
    display: flex;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    cursor: pointer;
  }
  .preview-input {
    display: none;
  }
  .image-wrap {
    height: 150px;
    width: 150px;
    margin-bottom: 10px;
  }
  .preview-image {
    width: 100%;
    height: 100%;
  }
  .business-btn {
    position: relative;
    height: 40px;
    width: 140px;
    background: #3b78dc;
    top: 530px;
    left: 325px;
    border: none;
    font-weight: bold;
    font-size: 16px;
    color: white;
    margin: 25px 0;
    align-self: flex-end;
    cursor: pointer;
  }
`
