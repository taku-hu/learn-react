import styled from 'styled-components'

import { FC } from 'react'

type Props = {
  placeholder?: string
}

export const Input: FC<Props> = ({ placeholder = '' }) => {
  return (
    <SInput type="text" placeholder={placeholder}></SInput>
  )
}

const SInput = styled.input`
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
  padding: 8px 16px;
`
