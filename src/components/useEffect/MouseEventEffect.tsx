import { useState, useEffect } from 'react'

export function MouseEventEffect () {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const getMousePosition = (e: MouseEvent) => {
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    window.addEventListener('mousemove', getMousePosition)

    return () => {
      window.removeEventListener('mousemove', getMousePosition)
    }
  }, [])

  return (
    <div>
      <h1>useEffect: MouseEvent</h1>
      <ul>
        <li>x座標： {x}</li>
        <li>y座標： {y}</li>
      </ul>
    </div>
  )
}
