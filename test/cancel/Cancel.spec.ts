import Cancel, { isCancel } from '../../src/cancel/Cancel';

describe('cancel:Cancel', () => {
  test('should return correct result when message is specified', () => {
    const cancel = new Cancel('Operation has been cancelled')
    expect(cancel.message).toBe('Operation has been cancelled')
  })

  test('should returns true if value is a Cancel', () => {
    expect(isCancel(new Cancel())).toBeTruthy()
  })

  test('should returns false if value is not a Cancel', () => {
    expect(isCancel({foo: 'bar'})).toBeFalsy()
  })
})