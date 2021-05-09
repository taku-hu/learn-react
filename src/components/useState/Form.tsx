import { useState } from 'react'

export function Form () {
  const [name, setName] = useState({
    firstName: '',
    lastName: ''
  })

  return (
    <div>
      <h1>useState: Object</h1>
      <div>
        <p>First Name: {name.firstName}</p>
        <p>Last Name: {name.lastName}</p>
      </div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={e => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={e => setName({ ...name, lastName: e.target.value })}
        />
      </form>
    </div>
  )
}
