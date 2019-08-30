import axios from 'apis/axios'
import { apiUrl } from 'apis/config'

//* Configures axios for our backend
export const api = axios.create({
  baseURL: apiUrl,
})
