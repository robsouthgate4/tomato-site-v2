import React from 'react'
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import  ReviewForm  from '../../components/ReviewForm';
import { getReviews } from '../../services/reviews';



class Reviews extends React.Component {

    componentDidMount = () => {
        const { filter } = this.props;

        getReviews(filter)
            .then(reviews => { console.log(reviews) })
    }

    componentWillMount = () => {

    }

    render () {
        return <div>
                    <h1>Reviews</h1>
                </div>
    }
}

const currentReviewFilter = (reviews, id) => {
    return reviews.filter((review, index) => review.id === id)
}

const mapStateToProps = (state, {match}) => ({
    //currentReview: currentReviewFilter(state.reviews, match.params.id),
    filter: match.params.id
});

const mapDispatchToProps = dispatch =>({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews))
