import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import Blog from './blog'
import Chat from './chat'

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
            <Link to="/chat">Chat</Link>
          </li>
        </ul>
        <Route exact path="/" component={App} />
        <Route path="/blog" component={Blog} />
        <Route path="/chat" component={Chat} />
      </div>
    </Router>
  )

  ReactDOM.render(routing, document.getElementById('root'))
