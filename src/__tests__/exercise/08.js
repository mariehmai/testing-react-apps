// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, act} from '@testing-library/react'
import useCounter from '../../components/use-counter'

const result = {}
function TestComponent(props) {
  Object.assign(result, useCounter(props))
  return null
}

test('exposes the count and increment/decrement functions', async () => {
  render(<TestComponent />)

  expect(result.count).toBe(0)
  act(() => result.increment())
  expect(result.count).toBe(1)
  act(() => result.decrement())
  expect(result.count).toBe(0)
})

test('allows customization of the initial count', async () => {
  render(<TestComponent initialCount={10} />)

  expect(result.count).toBe(10)
  act(() => result.increment())
  expect(result.count).toBe(11)
  act(() => result.decrement())
  expect(result.count).toBe(10)
})

test('allows customization of the step', async () => {
  render(<TestComponent step={2} />)

  expect(result.count).toBe(0)
  act(() => result.increment())
  expect(result.count).toBe(2)
  act(() => result.decrement())
  expect(result.count).toBe(0)
})
