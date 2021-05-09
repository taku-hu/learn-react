import { useParams, useLocation } from 'react-router-dom'
import { Location } from 'history'

export const ArticleParameter = () => {
  const { id } = useParams<{ id: string }>()
  const { search } = useLocation<Location>()
  const query = new URLSearchParams(search)

  return (
    <div>
      <h1>Article Parameter Page</h1>
      <p>Parameter is {id}</p>
      <p>Query is {query.get('number')}</p>
    </div>
  )
}
