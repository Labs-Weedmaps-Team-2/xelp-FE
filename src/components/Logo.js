import React from 'react'
import styled from 'styled-components'

export const Logo = () => {
  return <Brand>Logo</Brand>
}

const Brand = styled.div`
  width: 120px;
  height: 70%;
  margin-right: 20px;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1.2px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`
