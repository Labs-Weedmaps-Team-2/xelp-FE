import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import blackLogo from '../assets/img/blacklogo.png'


export const Logo = () => {
  return (
    <Link to='/'>
      <StyledLogo className="nightlyfe"src={blackLogo} alt="nightlyfe logo"/>
    </Link>
  )
}

const StyledLogo = styled.img`
  width: 150px;
`
