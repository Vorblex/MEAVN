import axios from 'axios'
// const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hamVzdHljNzc3QGdtYWlsLmNvbSIsInVzZXJJZCI6IjVjYTNiZjk0NzJhMWVhMjU4NzU4ODg3NSIsImlhdCI6MTU1NDM5NTczMSwiZXhwIjoxNTU0NDk4MDAwfQ.7a5l1X04XDV01HygNdxibApi2G27ywmsT5RnhRgjloo'
export default () => {
  const api = axios.create({
    baseURL: 'http://localhost:9999'
  })
  const AUTH_TOKEN = localStorage.getItem('accessToken')
  api.defaults.headers.common['Authorization'] = AUTH_TOKEN || false

  return api
}
