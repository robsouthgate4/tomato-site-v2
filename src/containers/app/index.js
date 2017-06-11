import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Login from '../login'
import Reviews from '../reviews';
import AuthGuard from '../../components/AuthGuard'

const App = () => (

  <div>
    <header>
      <Link to="/reviews">My review</Link>
      <Link to="/manage-reviews">Manage reviews</Link>
    </header>

    <main>
      <Route exact path="/login" component={Login}></Route>
      <Route path="/reviews" component={Reviews} />
    </main>
  </div>
)

export default App
