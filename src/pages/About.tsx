import { Link, useHistory } from 'react-router-dom'

export const About = () => {
  const history = useHistory()

  return (
    <div>
      <h1>About Page</h1>
      <Link to={{ pathname: 'about/president', state: 'John Doe' }}>President</Link>
      <br />
      <Link to="/about/staff">Staff</Link>
      <br />
      <button onClick={() => history.push('/about/president')}>Move to President Page</button>
    </div>
  )
}
