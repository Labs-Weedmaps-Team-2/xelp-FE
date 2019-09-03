import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBusinesses } from 'actions'

const BusinessList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBusinesses('los angeles', 'burgers', 0))
  }, [])

  // const businesses = useSelector(({ businesses }) => ({ businesses }))

  return (
    <StyledBusinessList>
      <ul>Hi</ul>
    </StyledBusinessList>
  )
}

export default BusinessList

const StyledBusinessList = styled.div`
  border: 1px solid red;
  width: 400px;
  height: 800px;
  margin: 0 auto;
`
