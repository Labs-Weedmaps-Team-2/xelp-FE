import React from 'react'
import GoogleSvg from 'assets/svg/google.svg'
import FacebookSvg from 'assets/svg/facebook.svg'
import GithubSvg from 'assets/svg/github.svg'
import { authUrl } from 'config'

const authProviders = [
  { name: 'Google', logo: GoogleSvg },
  { name: 'Facebook', logo: FacebookSvg },
  { name: 'Github', logo: GithubSvg },
]

export default (function SignInButtons(authProviders, url) {
  return authProviders.map(provider => (
    <a
      href={`${url}/${
        provider.name.toLowerCase() === 'google'
          ? 'google_oauth2'
          : provider.name.toLowerCase()
      }`}
      target='_blank'
      rel='noopener noreferrer'
    >
      <button>{`Sign in with ${provider.name}`}</button>
      <img src={provider.logo} alt={`${provider.name} sign in`} />
    </a>
  ))
})(authProviders, authUrl)
