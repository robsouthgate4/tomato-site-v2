import React from 'react';
import {Route, Link, Redirect, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import Login from '../login'
import Dashboard from '../dashboard';
import {loadUserFromToken, validateSession} from '../../modules/auth'

export class App extends React.Component {

    componentDidMount = () => {
        console.log(this.props)
        this.props.loadUserFromToken()
    }

    render() {

        return <div>
            <Route path="/login" component={Login}/>
            <Route path="/dashboard" component={Dashboard}></Route>
        </div>
    }
}

const mapStateToProps = state => {
    return {loggedIn: state.auth.isLoggedIn}
}

const mapDispatchToProps = dispatch => {
    return {
        loadUserFromToken : () => {
            let token = localStorage.getItem('jwt')
            if (!token || token === '') return
            dispatch(validateSession(token))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
