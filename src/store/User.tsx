import { createContext, useState } from 'react'
import type { FC, Dispatch, SetStateAction } from 'react'

type UserInfo = {
  isAdmin: boolean
}
type Context = {
  userInfo: UserInfo;
  setUserInfo: Dispatch<SetStateAction<UserInfo>>;
}

const UserContext = createContext({} as Context)

const UserProvider: FC = ({ children }) => {
  const [userInfo, setUserInfo] = useState({} as UserInfo)
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
