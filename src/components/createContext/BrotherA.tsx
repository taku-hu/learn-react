import { useContext } from 'react'
import { CountContext } from 'App'

export function BrotherA () {
  const { counterDispatch } = useContext(CountContext)

  return (
    <div>
      <button onClick={() => counterDispatch({ type: 'increment', value: 1 })}>increment</button>
    </div>
  )
}
