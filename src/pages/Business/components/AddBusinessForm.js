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
      <input placeholder='business name' />
      <input placeholder='address ex' />
      <input placeholder='hours' />
    </FormWrapper>
  )
}

export default BusinessForm

const FormWrapper = styled.form`
  input {
    border: 2px solid blue;
  }
`
