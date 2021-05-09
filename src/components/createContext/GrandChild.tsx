import { UserContext, LangugaeContext } from 'App'
import { useContext } from 'react'

export function GrandChild () {
  const user = useContext(UserContext)
  const language = useContext(LangugaeContext)

  return (
    <div>
      <h1>createContext &amp; useContext</h1>
      <div>{user && user.name}: {language}</div>

      <h1>createContext &amp; Consumer</h1>
      <UserContext.Consumer>
        {
          user => {
            return (
              <LangugaeContext.Consumer>
                {
                  language => {
                    return (
                      <div>{user && user.name}: {language}</div>
                    )
                  }
                }
              </LangugaeContext.Consumer>
            )
          }
        }
      </UserContext.Consumer>

    </div>
  )
}
