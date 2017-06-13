import React from 'react';
import {Route, Link, Redirect, Switch} from 'react-router-dom'
import Departments from '../departments';
import Login from '../login'
import Reviews from '../reviews';
import { fakeAuth } from '../../services/fakeAuth';
import AppRouting from '../../components/AppRouting';

const App = () => (

    <div>
        <header>
            <Link to="/dashboard/reviews">My review</Link>
            <Link to="/dashboard/manage-reviews">Manage reviews</Link>
            <Link to="/dashboard/departments">Departments</Link>
        </header>

        <main>
            <AppRouting></AppRouting>
        </main>

    </div>
)




export default App
