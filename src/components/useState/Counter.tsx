import { useState } from 'react'

export function Counter () {
  const [count, setCount] = useState(0)
  const incrementCount = () => setCount(count => count + 1)
  const incrementCountTen = () => {
    for (let i = 0; i < 10; i++) {
      setCount(preCount => preCount + 1)
    }
  }

  return (
    <div>
      <h1>useState: Primitive</h1>
      <h2>{count}</h2>
      <button onClick={incrementCount}>カウント +</button>
      <button onClick={incrementCountTen}>カウント 10 +</button>
    </div>
  )
}
