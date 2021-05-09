import styled from 'styled-components'

import { FC } from 'react'

type Props = {
  image: string;
  name: string
}

export const UserIconWithName: FC<Props> = ({ image, name }) => {
  return (
    <SContainer>
      <SImg width={160} height={160} src={image} alt={name} />
      <SName>{name}</SName>
    </SContainer>
  )
}

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
