import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import { PrimaryButton } from 'components/atoms/button/PrimaryButton'
import { SecondaryButton } from 'components/atoms/button/SecondaryButton'

import { SearchInput } from 'components/molecules/SearchInput'

import { UserCard } from 'components/organisms/user/UserCard'

import { NoFooter } from 'components/templates/NoFooter'
import { DefaultLayout } from 'components/templates/DefaultLayout'
import { Router } from 'router/Router'

function App () {
  return (
    <Router />
  )
}

export default App
