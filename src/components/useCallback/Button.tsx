import { memo } from 'react'
import type { FC } from 'react'

type Props = {
  handleClick: () => void
}

export const Button: FC<Props> = memo(({ handleClick, children }) => {
  console.log('Button component -', children)

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
})
