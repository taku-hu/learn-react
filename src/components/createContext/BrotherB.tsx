import { useContext } from 'react'
import { CountContext } from 'App'

export function BrotherB () {
  const { counterDispatch } = useContext(CountContext)

  return (
    <div>
      <button onClick={() => counterDispatch({ type: 'decrement', value: 1 })}>decrement</button>
    </div>
  )
}
