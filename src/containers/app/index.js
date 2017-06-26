import React from 'react';
import {Route, Link, Redirect, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import Login from '../login'
import _ from 'lodash'
import Dashboard from '../dashboard';


export const App = (props) => {


    const PrivateRoute = ({ component: Component, ...rest }) => (
          <Route {...rest} render={props => (
            checkSession() ? (
              <Component {...props}/>
            ) : (
              <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
              }}/>
            )
          )}/>
        )

  return <div>
              <Route path="/login" component={Login}/>
              <PrivateRoute path="/dashboard" component={Dashboard}></PrivateRoute>
          </div>

}

const checkSession = () => {
    return !_.isNull(localStorage.getItem('jwt'))
}
