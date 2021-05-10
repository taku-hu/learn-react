import { SecondaryButton } from 'components/atoms/button/SecondaryButton'
import { SearchInput } from 'components/molecules/SearchInput'
import { UserCard } from 'components/organisms/user/UserCard'
import { useContext } from 'react'
import { UserContext } from 'store/User'
import styled from 'styled-components'

const users = Array.from(new Array(10).keys()).map((_, index) => ({
  id: index,
  image: 'https://source.unsplash.com/FChJHRgqp9U',
  name: 'Takeuchi',
  email: 'test@test.com',
  phone: '090-1111-2222',
  company: {
    name: 'テスト株式会社'
  },
  website: 'https://www.google.com'
}))

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext)
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin })

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map(user => (<UserCard key={user.id} user={user} />))}
      </SUserArea>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`
const SUserArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  width: 100%;
  padding: 40px 0;
`
