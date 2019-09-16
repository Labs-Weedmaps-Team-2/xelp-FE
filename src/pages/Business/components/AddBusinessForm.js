import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { createBusiness } from 'actions'
import { Formik, Form, Field } from 'formik'
import { initialBusiness } from 'config'
import * as Yup from 'yup'

const BusinessForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = values => {
    // e.preventDefault()
    console.log('VALUES', values)
    console.log({ business: values })
    dispatch(createBusiness({ business: values }))
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
            <Field placeholder='business name' name='name' />
            <Field placeholder='address: 123 Main St' name='address' />
            <Field placeholder='city: San Francisco' name='city' />
            <Field placeholder='state: CA' name='state' />
            <Field placeholder='zipcode: 91081' name='zipcode' />
            <Field placeholder='category: Bar, Club, Lounge' name='category' />
          </div>
          <div>
            <label>Optional Details</label>
            <Field component='textarea' placeholder='hours' name='hours' />
            <Field placeholder='phone #' name='phone' />
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
