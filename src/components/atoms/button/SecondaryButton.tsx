import styled from 'styled-components'
import { BaseButton } from 'components/atoms/button/BaseButton'

import { FC } from 'react'

export const SecondaryButton: FC = ({ children }) => {
  return (
    <SButton>{children}</SButton>
  )
}

const SButton = styled(BaseButton)`
  background-color: #11999e;
`
