import { Article } from 'pages/Article'
import { ArticleParameter } from 'pages/ArticleParameter'

export const articleRoutes = [
  {
    path: '/',
    exact: true,
    children: <Article />
  },
  {
    path: '/:id',
    children: <ArticleParameter />
  }
]
