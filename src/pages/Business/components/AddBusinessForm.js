import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { createBusiness } from 'actions'
import { Formik, Form, Field } from 'formik'
import { initialBusiness } from 'config'
import { useRouter } from 'hooks'
import businessSvg from 'assets/svg/business.svg'
import AddBusinessPhotoInput from './AddBusinessPhoto'
import { Navbar } from 'components'
const BusinessForm = () => {
  const { history } = useRouter()
  const dispatch = useDispatch()

  const handleSubmit = async values => {
    const yelp_id = await dispatch(createBusiness(values))
    history.push(`/business/${yelp_id}`)
  }

  return (
    <>
      <Navbar />
      <Formik
        initialValues={initialBusiness}
        onSubmit={values => {
          handleSubmit(values)
        }}
      >
        {({ values }) => (
          <StyledForm>
            <div className='hero-img'>
              <img src={businessSvg} alt='' />
            </div>
            <h1>Add Your Business Details</h1>
            <AddBusinessPhotoInput values={values} />

            <div className='input-wrap'>
              <label className='input-label' htmlFor='name'>
                Business Name
              </label>
              <Field
                className='input-field'
                id='name'
                name='name'
                placeholder="Cesar's shop"
              />
            </div>
            <div className='input-wrap'>
              <label className='input-label' htmlFor='address'>
                Street Address
              </label>
              <Field
                className='input-field'
                id='address'
                name='address'
                placeholder='123 Main St'
              />
            </div>
            <div className='input-wrap'>
              <label className='input-label' htmlFor='city'>
                City
              </label>
              <Field
                className='input-field'
                id='city'
                name='city'
                placeholder='San Francisco'
              />
            </div>

            <div className='input-wrap'>
              <label className='input-label' htmlFor='state'>
                State
              </label>
              <Field
                className='input-field'
                id='state'
                name='state'
                placeholder='California'
              />
            </div>
            <div className='input-wrap'>
              <label className='input-label' htmlFor='zipcode'>
                ZIP
              </label>
              <Field
                className='input-field'
                id='zipcode'
                name='zipcode'
                placeholder='94103'
              />
            </div>

            <div className='input-wrap'>
              <label className='input-label' htmlFor='category'>
                Categories
              </label>
              <Field
                className='input-field'
                id='category'
                name='category'
                placeholder='Bar, Club, Lounge (max 3 categories)'
              />
            </div>
            <div className='input-wrap'>
              <label className='input-label' htmlFor='phone'>
                Business Phone
              </label>
              <Field
                id='phone'
                className='input-field'
                placeholder='555-555-555'
                name='phone'
              />
            </div>
            <div className='input-wrap'>
              <label className='input-label' htmlFor='website'>
                Web Address
              </label>
              <Field
                id='website'
                className='input-field'
                placeholder='http://example.com'
                name='website'
              />
            </div>
          </StyledForm>
        )}
      </Formik>
    </>
  )
}

export default BusinessForm

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 470px;
  margin: 0 auto 100px;
  .hero-img {
    width: 220px;
    height: 180px;
    align-self: center;
    margin-top: 40px;
    img {
      width: 100%;
    }
  }
  h1 {
    font-size: 30px;
    font-family: 'Helvetica Neue';
    padding: 20px 0;
    letter-spacing: 0.6px;
    text-align: center;
  }
  .input-label {
    padding: 10px 0;
    display: block;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.8px;
    color: #333;
  }
  .input-field {
    width: 465px;
    height: 30px;
    padding-left: 10px;
    font-size: 14px;
    outline: none;
    letter-spacing: 0.8px;

    &:focus {
      border: 1px solid dodgerblue;
    }
  }
`
