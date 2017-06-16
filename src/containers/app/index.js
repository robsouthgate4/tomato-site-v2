import React from 'react';
import {Route, Link, Redirect, Switch, withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import Login from '../login'
import Dashboard from '../dashboard';

const App = (props) => {

        const { loggedIn } = props;

        const PrivateRoute = ({ component: Component, ...rest }) => (
          <Route {...rest} render={props => (
            loggedIn ? (
              <Component {...props}/>
            ) : (
              <Redirect to='/login'/>
            )
          )}/>
        )

        return <div>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="/dashboard" component={Dashboard}></PrivateRoute>
                </div>
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.isLoggedIn
  }
}

export default withRouter(connect(mapStateToProps)(App));
