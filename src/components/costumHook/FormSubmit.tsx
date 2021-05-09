// import { useState } from 'react'
import type { FormEvent } from 'react'
import { useInput } from 'hooks/useInput'

export function FormSubmit () {
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')

  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')

  const handleClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!firstName || !lastName) {
      return
    }

    alert(`名前: ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }

  return (
    <div>
      <h1>Costum Hook: Form Update with useState</h1>
      <form onSubmit={handleClick}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            {...bindFirstName}
            // value={firstName}
            // onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            {...bindLastName}
            // value={lastName}
            // onChange={e => setLastName(e.target.value)}
          />
        </div>
        <button type="submit">送信</button>
      </form>
    </div>
  )
}
