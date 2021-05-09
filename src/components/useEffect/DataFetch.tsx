import axios, { AxiosResponse } from 'axios'
import { useState, useEffect } from 'react'

import type { User } from 'types/response-types'

export function DataFetch () {
  const [user, setUser] = useState({} as User)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const { data }: AxiosResponse<{ results: User[]}> = await axios.get('https://api.randomuser.me/')
    const [item] = data.results

    setUser(item)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>useEffect: API Request</h1>
      {loading ? <h2>loading...</h2> : <h2>{user.name.first} {user.name.last}</h2>}
    </div>
  )
}
