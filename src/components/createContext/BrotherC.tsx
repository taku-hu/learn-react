import { useContext } from 'react'
import { CountContext } from 'App'

export function BrotherC () {
  const { counterDispatch } = useContext(CountContext)

  return (
    <div>
      <button onClick={() => counterDispatch({ type: 'reset', value: 0 })}>reset</button>
    </div>
  )
}
