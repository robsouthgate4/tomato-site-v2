import React from 'react'
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReviewDetail from '../../components/ReviewDetail'
import { fetchUsers } from '../../modules/user'

class Reviews extends React.Component {

    componentDidMount = () => {
        const { filter, onLoad } = this.props;
        onLoad();
    }

    componentWillMount = () => {

    }

    render () {

        const { match } = this.props;

        console.log(match);
        // Return component based on params.
        return match.params.id ? <ReviewDetail></ReviewDetail> : <h1>Review overview</h1>

    }
}

const currentReviewFilter = (reviews, id) => {

}

const mapStateToProps = (state, {match}) => ({
    currentReview: currentReviewFilter(state.reviews, match.params.id),
    filter: match.params.id
});

const mapDispatchToProps = dispatch =>({
    onLoad(){
        dispatch(fetchUsers())
    }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews))
