import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { DefaultLayout } from 'components/templates/DefaultLayout'
import { NoFooter } from 'components/templates/NoFooter'

import { Top } from 'components/pages/Top'
import { Users } from 'components/pages/Users'

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route exact path="/users">
          <NoFooter>
            <Users />
          </NoFooter>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
