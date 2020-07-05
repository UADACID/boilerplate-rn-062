import axios from 'axios'
import { ApiConfig } from './constan'

const client = axios.create({
  baseURL: ApiConfig.baseApiUrl,
  timeout: Number(ApiConfig.timeOut)
})

client.interceptors.request.use(
  async response => {
    const originalConfig = response
    try {
      return originalConfig
    } catch (error) {
      return Promise.reject(error)
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default client
