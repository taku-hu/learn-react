import 'App.css'

import { BrowserRouter, Link } from 'react-router-dom'
import { Router } from 'router/Router'

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/article">Article</Link>

        <Router />
      </div>
    </BrowserRouter>
  )
}

export default App
