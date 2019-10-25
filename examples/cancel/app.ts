import axios, { Canceler } from '../../src/index'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

axios.get('/cancel/get', {
  cancelToken: source.token
}).catch(function(e) {
  if (axios.isCancel(e)) {
    console.log('Request Cancelled', e.message)
  }
})

setTimeout(() => {
  source.cancel('Operation cancelled by the user')

  setTimeout(() => {
    axios.post('/cancel/post', {a: 1}, {
      cancelToken: source.token
    }).catch(function(e) {
      if (axios.isCancel(e)) {
        console.log(e.message)
      }
    })
  }, 100)
}, 100)

let cancel: Canceler

axios.get('/cancel/get', {
  cancelToken: new CancelToken(c => {
    cancel = c
  })
}).catch(function(e) {
  if (axios.isCancel(e)) {
    console.log('Request cancelled')
  }
})

setTimeout(() => {
  cancel()
}, 500)