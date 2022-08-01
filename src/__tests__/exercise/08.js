// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, screen, act} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'

function TestComponent() {
  const {count, increment, decrement} = useCounter()

  return (
    <>
      <span>Count: {count}</span>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

test('exposes the count and increment/decrement functions', async () => {
  render(<TestComponent />)

  expect(screen.getByText(/count/i)).toHaveTextContent('Count: 0')

  await act(async () =>
    userEvent.click(screen.getByRole('button', {name: 'Increment'})),
  )
  expect(screen.getByText(/count/i)).toHaveTextContent('Count: 1')

  await act(async () =>
    userEvent.click(screen.getByRole('button', {name: 'Decrement'})),
  )
  expect(screen.getByText(/count/i)).toHaveTextContent('Count: 0')
})
