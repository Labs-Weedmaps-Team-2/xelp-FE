import React from 'react'
import styled from 'styled-components'
import SignInButtons from './createButtons.js'
const SignIn = () => {
  return <SignInWrapper>{SignInButtons}</SignInWrapper>
}

export default SignIn

const SignInWrapper = styled.div`
  border: 2px solid blue;
  width: 800px;

  a {
    border: 2px solid red;
    width: 800px;
  }
  button {
    padding: 1rem 1.5rem;
  }
  img {
    max-width: 55px;
  }
`
