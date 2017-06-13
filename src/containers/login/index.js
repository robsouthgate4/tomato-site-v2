import React, {PropTypes} from 'react'
import {fakeAuth} from '../../services/fakeAuth';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom'
import LoginForm from '../../components/LoginForm';

class Login extends React.Component {

    state = {
        redirectToReferrer: false
    }

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({redirectToReferrer: true})
        })
    }

    render() {

        const {from} = this.props.location.state || {
            from: {
                pathname: '/dashboard'
            }
        }

        const {redirectToReferrer} = this.state

        if (redirectToReferrer) {
            return (<Redirect to={from}/>)
        }

        return <div>
                    <LoginForm onClick={this.login}></LoginForm>
                </div>
    }
}

export default Login
