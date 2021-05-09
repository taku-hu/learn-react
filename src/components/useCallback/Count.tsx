import { memo } from 'react'
import type { FC } from 'react'

type Props = {
  text: string;
  count: number;
}

export const Count: FC<Props> = memo(({ text, count }) => {
  console.log('Count component -', text)

  return (
    <div>{text}: {count}</div>
  )
})
