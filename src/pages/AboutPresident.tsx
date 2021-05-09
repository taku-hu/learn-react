import { useLocation, useHistory } from 'react-router-dom'
import type { Location } from 'history'

export const AboutPresident = () => {
  const { state } = useLocation<Location<string>>()
  const history = useHistory()

  return (
    <div>
      <h1>About President Page</h1>
      <p>Recieved value is {state}</p>
      <button onClick={() => history.goBack()}>Return</button>
    </div>
  )
}
