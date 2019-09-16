import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { createBusiness } from 'actions'
import { useRouter } from 'hooks/useRouter'
const BusinessForm = () => {
  const { history } = useRouter()
  const dispatch = useDispatch()
  const [form, setValues] = useState({
    name: '',
    address: '',
    state: '',
    city: '',
    zipcode: '',
    hours: '',
    phone: '',
    website: '',
    category: '',
  })
  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const yelp_id = await dispatch(createBusiness(form))
    history.push(`/business/${yelp_id}`)
  }

  return (
    <FormWrapper
      style={{
        border: '2px solid pink',
        marginTop: '60px',
        display: 'flex',
        flexDirection: 'column',
      }}
      onSubmit={handleSubmit}
    >
      <label>Add Business</label>
      <div>
        <label>Required Information</label>
        <input
          placeholder='business name'
          value={form.name}
          onChange={updateField}
          name='name'
        />
        <input
          placeholder='address: 123 Main St'
          value={form.address}
          onChange={updateField}
          name='address'
        />
        <input
          placeholder='state: CA'
          value={form.state}
          onChange={updateField}
          name='state'
        />
        <input
          placeholder='zipcode: 91081'
          value={form.zipcode}
          onChange={updateField}
          name='zipcode'
        />
        <input
          placeholder='city: San Francisco'
          value={form.city}
          onChange={updateField}
          name='city'
        />
        <input
          placeholder='category: Bar, Club, Lounge'
          value={form.category}
          onChange={updateField}
          name='category'
        />
      </div>
      <div>
        <label>Optional Details</label>
        <textarea
          placeholder='hours'
          value={form.hours}
          onChange={updateField}
          name='hours'
        />
        <input
          placeholder='phone #'
          value={form.phone}
          onChange={updateField}
          name='phone'
        />
        <input
          placeholder='Website'
          value={form.website}
          onChange={updateField}
          name='website'
        />
      </div>
      <button type='submit'>submit</button>
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
  button {
    padding: 0.5rem;
  }
`
