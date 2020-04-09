import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './css/index.css'
import App from './App'
import Blog from './views/blog'
import Suggest from './views/suggest'
import Chat from './views/chat'
import SignUp from './views/signup'
import ValidatedLoginForm from './views/ValidatedLoginForm'
import Test from './views/test'

function requireAuth(nextState, replace) {
  /*if (!loggedIn()) {
    replace({
      pathname: '/test'
    })
  }*/
}

/*
<ul className="wrap">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/suggest">Suggestions</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
*/

const routing = (
  <Router>
    <div>
      <div class="nav">
        <Link class="wrap" to="/">Home</Link>
        <Link class="wrap" to="/blog">Blog</Link>
        <Link class="wrap" to="/suggest">Suggestions</Link>
        <Link class="wrap" to="/login">Login</Link>
      </div>
      <Route exact path="/" component={Blog} />
      <Route path="/blog" component={Blog} />
      <Route path="/suggest" component={Suggest} />
      <Route path="/login" component={ValidatedLoginForm} />
      <Route path="/test" component={Test} />

    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
