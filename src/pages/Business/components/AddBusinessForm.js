import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { createBusiness } from 'actions'
import { Formik, Form, Field } from 'formik'
import { initialBusiness, states } from 'config'
import * as Yup from 'yup'
import { useRouter } from 'hooks'

const BusinessForm = () => {
  const { history } = useRouter()
  const dispatch = useDispatch()

  const handleSubmit = async values => {
    const yelp_id = await dispatch(createBusiness(values))
    history.push(`/business/${yelp_id}`)
  }

  return (
    <Formik
      initialValues={initialBusiness}
      onSubmit={values => {
        console.log(values)
        handleSubmit(values)
      }}
    >
      {({ values }) => (
        <StyledForm>
          <label>Add Business</label>
          <div>
            <label>Required TEST Information</label>
            <Field placeholder='Business Name' name='name' />
            <Field placeholder='Address: 123 Main St' name='address' />
            <Field placeholder='City: San Francisco' name='city' />
            <Field component='select' placeholder='State: CA' name='state'>
              {states.map(state => (
                <option key={state.name} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </Field>
            <Field placeholder='Zip Code: 91081' name='zipcode' />
            <Field placeholder='Category: Bar, Club, Lounge' name='category' />
          </div>
          <div>
            <label>Optional Details</label>
            <Field component='textarea' placeholder='hours' name='hours' />
            <Field placeholder='Phone Number: 800-555-555' name='phone' />
            <Field placeholder='Website' name='website' />
          </div>
          <button>submit</button>
        </StyledForm>
      )}
    </Formik>
  )
}

export default BusinessForm

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`
