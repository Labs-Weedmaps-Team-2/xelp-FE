import React, { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'hooks'
import { setSearch, fetchBusiness } from 'actions'
import styled from 'styled-components'

export const SearchBar = () => {
  const inputTerm = useRef()
  const inputLocation = useRef()
  const dispatch = useDispatch()
  const { history } = useRouter()
  useEffect(() => {
    inputTerm.current.focus()
  }, [])

  const { term, location } = useSelector(({ search }) => ({
    term: search.term,
    location: search.location,
  }))

  return (
    <Form
      onSubmit={e => {
        e.preventDefault()
        dispatch(fetchBusiness(term, location))
        //* push to business-list if we use the search bar
        //* and not already on business-list
        if (!window.location.pathname.includes('business-list')) {
          history.push('/business-list')
        }
      }}
    >
      <div className='input-wrapper'>
        <label className='label-find' htmlFor='find'>
          Find
        </label>
        <input
          className='input'
          id='find'
          type='text'
          ref={inputTerm}
          placeholder="tacos, cheap dinner, Max's"
          value={term}
          onChange={e => dispatch(setSearch(e.target.value, location))}
          onClick={() => inputTerm.current.select()}
        />
      </div>
      <div className='input-wrapper'>
        <label className='label-near' htmlFor='near'>
          Near
        </label>
        <input
          className='input'
          id='near'
          type='text'
          ref={inputLocation}
          placeholder='city, state or zip code'
          value={location}
          onChange={e => dispatch(setSearch(term, e.target.value))}
          onClick={() => inputLocation.current.select()}
        />
      </div>
      <button>S</button>
    </Form>
  )
}

const Form = styled.form`
  font-family: 'Helvetica Neue';
  width: 900px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #a71c1c;
  background-color: #a71c1c;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  margin: 0 auto 0 18px;
  background-color: white;
  position: relative;
  .input-wrapper {
    width: 50%;
    display: relative;
    border: none;
    padding: 0px 12px;
    font-size: 14px;
    margin: 6px 0px;
    &:first-child {
      border-right: 1px solid #cccccc;
    }
  }
  label {
    font-weight: bold;
    letter-spacing: 1.5px;
    font-size: 16px;
  }
  input {
    display: relative;
    bottom: 5px;
    border: none;
    outline: none;
    font-size: 15px;
    letter-spacing: 0.8px;
    line-height: 20px;
    width: 70%;
    height: 100%;
    color: #141414;
    padding-left: 10px;
    font-weight: thin;
  }
  button {
    width: 70px;
    height: 100%;
    font-size: 24px;
    border: none;
    background-color: #a71c1c;
    border: 1px solid #a71c1c;
    color: white;
    font-weight: bold;
    position: relative;
    left: 1px;
  }
`
