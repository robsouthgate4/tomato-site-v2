import React, {PropTypes} from 'react'
import {Route, Link, Redirect, Switch} from 'react-router-dom'
import Departments from '../containers/departments';
import Login from '../containers/login'
import Reviews from '../containers/reviews';

const AppRouting = props => {
  return <Switch>
              <Route exact path="/dashboard" render={() => <h1>Dashboard</h1>}/>
              <Route path="/dashboard/reviews/:id?" component={Reviews} />
              <Route path="/dashboard/manage-reviews" component={Reviews} />
              <Route path="/dashboard/departments" component={Departments} />
              <Route render={() => <h1>404 no page exists</h1>}/>
          </Switch>
}

export default AppRouting;
