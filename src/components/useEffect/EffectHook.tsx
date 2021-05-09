import { useState, useEffect } from 'react'

export function ClickCounter () {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    document.title = `クリック数： ${count} 回`
  }, [count])

  return (
    <div>
      <h1>useEffect: Dependency</h1>
      <p>クリック数： {count} 回</p>
      <p>名前： {name}</p>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => setCount(count => count + 1)}>クリック +</button>
    </div>
  )
}
