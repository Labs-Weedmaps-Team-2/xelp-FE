// Configuration variables

export const clientUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://development--goofy-edison-2eb1f5.netlify.com'
    : 'http://localhost:4000'

export const serverUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://xelp-development.herokuapp.com'
    : 'http://localhost:3000'

export const apiUrl = `${serverUrl}/api/v1`

export const authUrl = `${serverUrl}/auth`

export const initialBusiness = {
  name: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
  category: '',
  hours: '',
  phone: '',
  website: '',
}
