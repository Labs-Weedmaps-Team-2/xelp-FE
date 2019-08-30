import React from 'react'
import styled from 'styled-components'
import createSignInButtons from './createButtons.js'
const SignIn = () => {
  return <SignInWrapper>{createSignInButtons}</SignInWrapper>
}

export default SignIn

const SignInWrapper = styled.div`
  button {
    padding: 1rem 1.5rem;
  }
`
