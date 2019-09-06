import React from 'react'
import GoogleSvg from 'assets/svg/google.svg'
import FacebookSvg from 'assets/svg/facebook.svg'
import GithubSvg from 'assets/svg/github.svg'
import styled from 'styled-components'
import { authUrl } from 'config'

const authProviders = [
  { name: 'Google', logo: GoogleSvg },
  { name: 'Facebook', logo: FacebookSvg },
  { name: 'Github', logo: GithubSvg },
]

const createProviderLink = provider => {
  return provider.name.toLowerCase() === 'google'
    ? 'google_oauth2'
    : provider.name.toLowerCase()
}

const SignIn = () => {
  return (
    <StyledSignIn>
      {authProviders.map(provider => (
        <a
          key={provider.name}
          href={`${authUrl}/${createProviderLink(provider)}`}
        >
          <button>
            <img src={provider.logo} alt={`${provider.name} sign in`} />
            <span>{`Sign in with ${provider.name}`} </span>
          </button>
        </a>
      ))}
    </StyledSignIn>
  )
}

export default SignIn

const StyledSignIn = styled.div`
  /* border: 2px solid blue; */
  max-width: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 90px auto;
  a {
    /* border: 2px solid red; */
    display: flex;
    justify-content: center;
    margin: 10px 0;
  }
  button {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 1.5rem;
    cursor: pointer;
    background-color: white;
    span {
      padding-left: 30px;
      font-size: 2rem;
    }
    img {
      max-width: 50px;
    }
  }
`
