import { Header } from 'components/atoms/layout/Header'

import { FC } from 'react'

export const NoFooter: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
