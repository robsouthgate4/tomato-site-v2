import React, {PropTypes} from 'react'
import {fakeAuth} from '../../services/fakeAuth';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom'
import LoginForm from '../../components/LoginForm';
import { login } from '../../modules/auth';

import { saveItem, getItem } from '../../localStorage'

class Login extends React.Component {

    componentDidMount = () => {

    }

    login = () => {
        // Simulate return token from api
        // successfull login
        this.props.loginUser({
            'username': 'username',
            'password': 'password'
        });

        setTimeout(() => {this.props.history.push('/dashboard')}, 1100)

    }

    render() {

        return <div>
                    <LoginForm onClick={this.login}></LoginForm>
                </div>
    }
}

const mapStateToProps = (state, {match}) => ({

});

const mapDispatchToProps = dispatch =>({
  loginUser(userData){
      dispatch(login(userData))
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Login))
