import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
const BusinessForm = () => {
  const [form, setValues] = useState({
    businessName: '',
    businessAddress: '',
    businessState: '',
    businessHours: '',
    businessPhoneNum: '',
    businessWebsite: '',
  })
  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <FormWrapper
      style={{
        border: '2px solid pink',
        marginTop: '60px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <label>Add Business</label>
      <div>
        <label>Required Information</label>
        <input
          placeholder='business name'
          value={form.businessName}
          onChange={updateField}
          name='businessName'
        />
        <input
          placeholder='123 Main St'
          value={form.businessAddress}
          onChange={updateField}
          name='businessAddress'
        />
        <input
          placeholder='San Francisco, CA 94103'
          value={form.businessState}
          onChange={updateField}
          name='businessState'
        />
      </div>
      <div>
        <label>Optional Details</label>
        <textarea
          placeholder='hours'
          value={form.businessHours}
          onChange={updateField}
          name='businessHours'
        />
        <input
          placeholder='phone #'
          value={form.businessPhoneNum}
          onChange={updateField}
          name='businessPhoneNum'
        />
        <input
          placeholder='Website'
          value={form.businessWebsite}
          onChange={updateField}
          name='businessWebsite'
        />
      </div>
    </FormWrapper>
  )
}

export default BusinessForm

const FormWrapper = styled.form`
  max-width: 400px;
  input {
    border: 2px solid blue;
    margin-bottom: 0.5rem;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  label {
    text-align: center;
  }
  textarea {
    resize: none;
    height: 60px;
    border: 2px solid goldenrod;
    margin-bottom: 0.5rem;
  }
`
