import React from 'react';
<<<<<<< HEAD
import { Route, Link } from 'react-router-dom'
=======
import {Route, Link, Switch} from 'react-router-dom'
import Home from '../home'
>>>>>>> 417cfe55874d781f8fb501ce341af41b734ba7d3
import Login from '../login'
import Reviews from '../reviews';
import AuthGuard from '../../components/AuthGuard'

const App = () => (

    <div>
        <header>
            <Link to="/reviews">My review</Link>
            <Link to="/manage-reviews">Manage reviews</Link>
            <Link to="/departments">Departments</Link>
        </header>

<<<<<<< HEAD
    <main>
      <Route exact path="/login" component={Login}></Route>
      <Route path="/reviews/:id?" component={Reviews} />
    </main>
  </div>
=======
        <main>
            <Switch>
                <Route exact path="/login" render={() => <h1>Home</h1>}/>
                <Route path="/reviews/:id?" render={() => <h1>Reviews</h1>}/>
                <Route render={() => <h1>Page not found</h1>} />
            </Switch>
        </main>
    </div>
>>>>>>> 417cfe55874d781f8fb501ce341af41b734ba7d3
)

export default App
