import React, {PropTypes} from 'react'
import {fakeAuth} from '../../services/fakeAuth';
import { connect } from 'react-redux'
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom'
import LoginForm from '../../components/LoginForm';
import { login } from '../../modules/user';

class Login extends React.Component {

    state = {
        redirectToReferrer: false
    }

    componentDidMount = () => {

    }

    login = () => {
        fakeAuth.authenticate(() => { // TODO: apply real auth returning token
            this.setState({redirectToReferrer: true})
            this.props.onPageLoad({
                id: 1,
                firstname: 'Rob',
                lastname: 'Southgate'
            });
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

const mapStateToProps = (state, {match}) => ({

});

const mapDispatchToProps = dispatch =>({
  onPageLoad(userData){
      dispatch(login(userData))
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Login))
