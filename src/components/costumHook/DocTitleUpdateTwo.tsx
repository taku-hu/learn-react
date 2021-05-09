import { useDocumentTitle } from 'hooks/useDocumentTitle'
import { useState } from 'react'

export function DocTitleUpdateTwo () {
  const [count, setCount] = useState(0)

  useDocumentTitle(count)

  return (
    <div>
      <h1>Costum Hook: Title Update Two</h1>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}
