import React, { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSearch, fetchBusiness } from 'actions'
import styled from 'styled-components'

export const SearchBar = () => {
  const inputTerm = useRef()
  const dispatch = useDispatch()

  useEffect(() => {
    inputTerm.current.focus()
  }, [])

  const { term, location } = useSelector(({ search }) => ({
    term: search.term,
    location: search.location,
  }))

  const handleClick = e => {
    const { id } = e.target
  }

  return (
    <Form
      onClick={handleClick}
      onSubmit={e => {
        e.preventDefault()
        dispatch(fetchBusiness(term, location))
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
          onChange={e =>
            dispatch(setSearch(e.target.value, location, location))
          }
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
          placeholder='city, state or zip code'
          value={location}
          onChange={e => dispatch(setSearch(term, e.target.value))}
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
  .input-wrapper {
    width: 50%;
    display: relative;
    border: none;
    background-color: white;
    padding: 8px 12px;
    font-size: 14px;
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
  }
`
