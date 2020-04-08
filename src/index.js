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

const routing = (
    <Router>
      <div>
        <ul>
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
        <Route exact path="/" component={Blog} />
        <Route path="/blog" component={Blog} />
        <Route path="/suggest" component={Suggest} />
        <Route path="/login" component={ValidatedLoginForm} />
        
      </div>
    </Router>
  )

  ReactDOM.render(routing, document.getElementById('root'))
