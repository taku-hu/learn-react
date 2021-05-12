import { Router } from 'router/Router'
import { UserProvider } from 'store/User'
import { RecoilRoot } from 'recoil'

function App () {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  )
}

export default App
