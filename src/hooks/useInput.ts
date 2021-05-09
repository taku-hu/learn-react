import { ChangeEvent, useState } from 'react'

export function useInput (initialValue: string) {
  const [value, setValue] = useState(initialValue)
  const bind = {
    value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    }
  }
  const reset = () => setValue(initialValue)

  const returnItems: [typeof value, typeof bind, typeof reset] = [value, bind, reset]

  return returnItems
}
