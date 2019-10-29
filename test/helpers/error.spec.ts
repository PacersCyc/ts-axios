import { createError } from '../../src/helpers/error'
import { AxiosRequestConfig } from '../../src';
import { AxiosResponse } from '../../src/types/index';

describe('helpers:error', () => {
  test('should create an error with message, config, code, request, response and isAxiosError', () => {
    const request = new XMLHttpRequest()
    const config: AxiosRequestConfig = {method: 'POST'}
    const response: AxiosResponse = {
      status: 200,
      statusText: 'OK',
      headers: null,
      request,
      config,
      data: {foo: 'bar'}
    }
    const error = createError('Boom!', config, 'SOMETHING', request, response)

    expect(error instanceof Error).toBeTruthy()
    expect(error.message).toBe('Boom!')
    expect(error.config).toBe(config)
    expect(error.code).toBe('SOMETHING')
    expect(error.request).toBe(request)
    expect(error.response).toBe(response)
    expect(error.isAxiosError).toBeTruthy()
  })
})