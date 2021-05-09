import { Link } from 'react-router-dom'

export const Article = () => {
  const randomId = Math.floor(Math.random() * 11)
  const randomNumber = Math.floor(Math.random() * 101)

  return (
    <div>
      <h1>Article Page</h1>
      <Link to={`/article/${randomId}`}>URL Parameter</Link>
      <br />
      <Link to={`/article/${randomId}?number=${randomNumber}`}>Query Parameter</Link>
    </div>
  )
}
