import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSearch } from 'actions'
import styled from 'styled-components'

export const SearchBar = () => {
  const dispatch = useDispatch()

  const { term, location } = useSelector(({ search }) => ({
    term: search.term,
    location: search.location,
  }))

  return (
    <Form>
      <div className='input-wrapper'>
        <label className='label-find' htmlFor='find'>
          Find
        </label>
        <input
          className='input'
          id='find'
          type='text'
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
  border: 1px solid red;
  width: 700px;
  height: 40px;
  border-radius: 4px;
  border-bottom-left-radius: 0px;
  display: flex;
  margin: 0 auto;
  .input-wrapper {
    width: 50%;
    display: relative;
    border: none;
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
    background-color: darkred;
    color: white;
    font-weight: bold;
    border: none;
  }
`
