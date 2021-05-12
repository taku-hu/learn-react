import styled from 'styled-components'
import { memo/*, useContext */ } from 'react'
// import { UserContext } from 'store/User'
import { useRecoilValue } from 'recoil'

import type { FC } from 'react'
import { userState } from 'store/useState'

type Props = {
  image: string;
  name: string;
}

export const UserIconWithName: FC<Props> = memo(({ image, name }) => {
  // const { userInfo } = useContext(UserContext)
  const userInfo = useRecoilValue(userState)
  const isAdmin = !!userInfo.isAdmin
  return (
    <SContainer>
      <SImg width={160} height={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  )
})

const SContainer = styled.div`
  text-align: center;
`
const SImg = styled.img`
  border-radius: 50%;
`
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`
