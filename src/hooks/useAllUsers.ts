import axios from 'axios'

import { useState } from 'react'
import { User } from 'types/api/user'
import { UserProfile } from 'types/userProfile'

export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<UserProfile[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getUsers = async () => {
    setLoading(true)
    setError(false)

    try {
      const { data } = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      const pickedData = data.map(({ id, name, username, email, address: { city, suite, street } }) => ({
        id,
        email,
        name: `${name}(${username})`,
        address: `${city}${suite}${street}`
      }))
      setUserProfiles(pickedData)
    } catch {
      setError(true)
    }

    setLoading(false)
  }

  return { getUsers, userProfiles, loading, error }
}
