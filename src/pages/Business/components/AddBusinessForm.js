import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
const BusinessForm = () => {
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
        <input placeholder='business name' />
        <input placeholder='123 Main St' />
        <input placeholder='San Francisco, CA 94103' />
      </div>
      <div>
        <label>Optional Details</label>
        <textarea placeholder='hours' />
        <input placeholder='phone #' />
        <input placeholder='Website' />
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
