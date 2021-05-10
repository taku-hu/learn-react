import { Router } from 'router/Router'
import { UserProvider } from 'store/User'

function App () {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  )
}

export default App
