import { useState } from 'react'

export function Items () {
  const [items, setItems] = useState<{ id: number; value: number }[]>([])
  const addItem = () => setItems([
    ...items,
    {
      id: items.length,
      value: Math.floor(Math.random() * 11)
    }
  ])

  return (
    <div>
      <h1>useState: Array</h1>
      <button onClick={addItem}>追加</button>
      <ul>
        {
          items.map(item => (
            <li key={item.id}>
              {item.value}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
