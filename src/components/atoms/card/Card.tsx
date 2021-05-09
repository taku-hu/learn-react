import styled from 'styled-components'

import { FC } from 'react'

export const Card: FC = ({ children }) => {
  return (
    <SCard>
      {children}
    </SCard>
  )
}

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`
