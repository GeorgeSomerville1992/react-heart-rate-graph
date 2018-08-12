import axios from 'axios'

export const apiEndpoint = () => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {'X-Requested-With': 'XMLHttpRequest'},
  });

  return {
    getHeartRateData: new Promise((resolve, reject) => {
      axiosInstance.get('/heartrate').then((response) => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default apiEndpoint