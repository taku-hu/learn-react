import styled from 'styled-components'
import { BaseButton } from 'components/atoms/button/BaseButton'

import { FC } from 'react'

type Props = {
  onClick: VoidFunction
}

export const SecondaryButton: FC<Props> = ({ children, onClick }) => {
  return (
    <SButton onClick={onClick}>{children}</SButton>
  )
}

const SButton = styled(BaseButton)`
  background-color: #11999e;
`
