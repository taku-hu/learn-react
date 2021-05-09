
import { Switch, Route } from 'react-router-dom'

import { Home } from 'pages/Home'

import { aboutRoutes } from 'router/AbouteRoutes'
import { articleRoutes } from 'router/ArticleRoutes'
import { NotFound } from 'pages/404'

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about" render={({ match: { url } }) => (
        <Switch>
          {aboutRoutes.map(route => (
            <Route
              key={route.path}
              exact={route.exact}
              path={`${url}${route.path}`}
            >
              {route.children}
            </Route>
          ))}
        </Switch>
      )} />

      <Route path="/article" render={({ match: { url } }) => (
        <Switch>
          {articleRoutes.map(route => (
            <Route
              key={route.path}
              exact={route.exact}
              path={`${url}${route.path}`}
            >
              {route.children}
            </Route>
          ))}
        </Switch>
      )} />

      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  )
}
