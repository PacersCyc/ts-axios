import axios, { AxiosError } from '../../src/index'

// 404错误
axios({
  method: 'get',
  url: '/error/get1'
}).then(res => {
  console.log(res)
}).catch(e => {
  console.log(e)
})

// 状态码错误
axios({
  method: 'get',
  url: '/error/get'
}).then(res => {
  console.log(res)
}).catch(e => {
  console.log(e)
})

// 模拟网络错误
setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/get'
  }).then(res => {
    console.log(res)
  }).catch(e => {
    console.log(e)
  })
}, 5000)

// 超时错误
axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
}).then(res => {
  console.log(res)
}).catch((e: AxiosError) => {
  console.log(e.message)
  console.log(e.config)
  console.log(e.code)
  console.log(e.request)
})