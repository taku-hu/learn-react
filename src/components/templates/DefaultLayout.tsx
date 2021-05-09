import { Header } from 'components/atoms/layout/Header'
import { Footer } from 'components/atoms/layout/Footer'

import { FC } from 'react'

export const DefaultLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
