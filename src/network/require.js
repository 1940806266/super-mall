import axios from "axios"
export function require(config) {
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5",
    timeout: 3000
  })
  instance.interceptors.request.use(config => {
    return config
    console.log(config)
  },err => {
    console.log(err)
  })
  instance.interceptors.response.use(res =>{
     return res.data
  },err =>{
    console.log(err)
  })
  return instance(config)
}
