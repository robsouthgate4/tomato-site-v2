import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import store, {history} from './store'
import App from './containers/app'
import {BrowserRouter as Router, Route, Link, Redirect, withRouter, Switch} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './containers/login'
import {fakeAuth} from './services/fakeAuth';

import './index.css'

const target = document.querySelector('#root')

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={props => {
        console.log(props.location);
        if (fakeAuth.isAuthenticated) {
            return <Component {...props}/>
        } else {
            return <Redirect to={{
                pathname: '/login',
                state: {
                    from: props.location
                }
            }}/>
        }
    }} />
)

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider>
                <div>
                    <Switch>
                        <Route exact path="/" render={() => {
                            if (fakeAuth.isAuthenticated) {
                                return <Redirect to={'/dashboard'}></Redirect>
                            }
                            else {
                                return <Redirect to={'/login'}></Redirect>
                            }
                        }}></Route>
                        <Route exact path="/login" component={Login}/>
                        <PrivateRoute path="/dashboard" component={App}/>
                        <Route render={() => <h1>404 no page exists</h1>}/>
                    </Switch>
                </div>
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>,
    target
)
