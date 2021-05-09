import styled from 'styled-components'
import { BaseButton } from 'components/atoms/button/BaseButton'

import { FC } from 'react'

export const PrimaryButton: FC = ({ children }) => {
  return (
    <SButton>{children}</SButton>
  )
}

const SButton = styled(BaseButton)`
  background-color: #40514e;
`
