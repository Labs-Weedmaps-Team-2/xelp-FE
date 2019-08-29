import axios from 'axios'
import { apiUrl } from 'config'

//* Configures axios for our backend
export default axios.create({
  baseURL: apiUrl,
})
