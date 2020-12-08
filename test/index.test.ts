import { renderHook, act } from '@testing-library/react-hooks'
import useLocalStorage from '../src/index'

const runTests = <T>(key: string, initial: T, changed: T) => {
  it('sets the initial value', () => {
    const { result } = renderHook(() => useLocalStorage(key, initial))

    expect(result.current[0]).toEqual(typeof initial === 'function' ? initial() : initial)
    expect(typeof result.current[1]).toMatch('function')
  })

  it('updates the value in the hook result and in the localStorage', () => {
    const { result } = renderHook(() => useLocalStorage(key, initial))

    act(() => result.current[1](changed))

    expect(result.current[0]).toEqual(changed)
    expect(localStorage.getItem(key)).toStrictEqual(JSON.stringify(changed))
  })

  it('updates the value in other hooks using the same key', () => {
    const { result: result1 } = renderHook(() => useLocalStorage(key, initial))
    const { result: result2 } = renderHook(() => useLocalStorage(key, initial))
    const { result: result3 } = renderHook(() => useLocalStorage('another-key', initial))

    act(() => result1.current[1](changed))

    expect(result1.current[0]).toStrictEqual(changed)
    expect(result2.current[0]).toStrictEqual(changed)
    expect(result3.current[0]).toStrictEqual(typeof initial === 'function' ? initial() : initial)
  })
}

describe('useLocalStorage', (): void => {
  describe('with string values', () => {
    runTests('string-key', 'foo', 'bar')
  })

  describe('with number values', () => {
    runTests('number-key', 1, 2)
  })

  describe('with object values', () => {
    runTests('object-key', { foo: 'bar' }, { bar: 'foo' })
  })

  describe('with mixed values', () => {
    runTests<string | object>('mixed-key', { foo: 'bar' }, 'foo')
  })

  describe('with a function', () => {
    runTests<object>(
      'function-key',
      () => ({
        foo: 'bar',
      }),
      {
        bar: 'foo',
      },
    )
  })
})
