import React, {PropTypes} from 'react'
import {Route, Link, Redirect, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import ReviewDetail from '../../components/ReviewDetail'

const Dashboard = (props) => {
    const { match } = props;
    return <div>
                <header>
                    <ul>
                        <li>My review</li>
                        <li>Manage reviews</li>
                        <li>Departments</li>
                    </ul>
                </header>
                <main>
                    <Route path={`${match.url}/my-review`} component={ReviewDetail}></Route>
                </main>
            </div>;
}

export default withRouter((Dashboard));
