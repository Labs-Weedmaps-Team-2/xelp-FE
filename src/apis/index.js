import axios from 'axios'
import { apiUrl, serverUrl } from 'config'

//* Configures axios for our backend
export const api = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
})
