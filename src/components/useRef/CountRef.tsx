import { useState, useEffect, useRef } from 'react'

export function CountRef () {
  const [count, setCount] = useState(0)
  const intervalRef = useRef<number>()
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setCount(count => count + 1)
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div>
      <h1>useRef: Count</h1>
      <h2>{count}</h2>
      <button onClick={() => clearInterval(intervalRef.current)}>STOP</button>
    </div>
  )
}
