import axios, { AxiosResponse } from 'axios'
import { useState, useEffect } from 'react'

import type { Post } from 'types/response-types'

export function DataFetchById () {
  const [post, setPost] = useState({} as Post)
  const [loading, setLoading] = useState(true)
  const [id, setId] = useState('1')

  const fetchData = async () => {
    setLoading(true)
    const { data: item }: AxiosResponse<Post> = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

    setPost(item)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [id])

  return (
    <div>
      <h1>useEffect: API Request Dpendency</h1>
      <input
        type="text"
        value={id}
        onChange={e => setId(e.target.value)}
      />
      {loading ? <h2>loading...</h2> : <h2>{post.title}</h2>}
    </div>
  )
}
