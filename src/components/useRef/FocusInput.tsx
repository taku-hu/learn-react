import { useEffect, useRef } from 'react'

export const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  console.log(inputRef)
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div>
      <h1>useRef: Input Element</h1>
      <input ref={inputRef} type="text" />
    </div>
  )
}
