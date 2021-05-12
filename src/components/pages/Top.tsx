import styled from 'styled-components'
// import { useContext } from 'react'
import { SecondaryButton } from 'components/atoms/button/SecondaryButton'
import { useHistory } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { userState } from 'store/useState'
// import { UserContext } from 'store/User'
// import { useSetRecoilState } from 'recoil'

export const Top = () => {
  const history = useHistory()
  // const { setUserInfo } = useContext(UserContext)
  const setUserInfo = useSetRecoilState(userState)

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true })
    history.push('/users')
  }
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false })
    history.push('/users')
  }

  return (
    <SContainer>
      <h2>TOPページ</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`
