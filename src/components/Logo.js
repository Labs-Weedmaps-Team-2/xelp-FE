import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Logo = () => {
  return (
    <Link to='/'>
      <Brand>Xelp</Brand>
    </Link>
  )
}

const Brand = styled.div`
  border: 1px solid black;
  width: 120px;
  height: 40px;
  margin-right: 20px;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1.2px;
  justify-content: center;
  align-items: center;
  color: white;
`
