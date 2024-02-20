import axios from 'axios'

const axiosConfig = axios.create({
  baseURL: `https://rickandmortyapi.com/api/`,
  headers: {
    method: 'GET',
    ContentType: 'application/json'
  }
})

export default axiosConfig
