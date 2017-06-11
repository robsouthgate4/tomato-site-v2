import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import Home from '../home'
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

        <main>
            <Switch>
                <Route exact path="/login" render={() => <h1>Home</h1>}/>
                <Route path="/reviews/:id?" render={() => <h1>Reviews</h1>}/>
                <Route render={() => <h1>Page not found</h1>} />
            </Switch>
        </main>
    </div>
)

export default App
