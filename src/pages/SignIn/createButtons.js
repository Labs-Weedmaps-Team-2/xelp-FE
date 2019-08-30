import React from 'react'

const authProviders = ['Google', 'Facebook', 'Github']
// switch this out later to be dynamic depending on ENV
const url = 'https://xelp-development.herokuapp.com'

export default (function createSignInButtons(authProviders, url) {
  return authProviders.map(provider => (
    <a
      href={`${url}/auth/${
        provider.toLowerCase() === 'google'
          ? 'google_oauth2'
          : provider.toLowerCase()
      }`}
      target='_blank'
      rel='noopener noreferrer'
    >
      <button>{`Sign in with ${provider}`}</button>
    </a>
  ))
})(authProviders, url)
