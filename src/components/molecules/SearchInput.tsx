import styled from 'styled-components'

import { PrimaryButton } from 'components/atoms/button/PrimaryButton'
import { Input } from 'components/atoms/input/Input'

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWraooer>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWraooer>
    </SContainer>
  )
}

const SContainer = styled.div`
  display:flex;
  align-items: center;
`

const SButtonWraooer = styled.div`
  padding-left: 8px;
`
