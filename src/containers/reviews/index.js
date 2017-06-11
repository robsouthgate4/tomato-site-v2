import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import  ReviewOverview  from './ReviewOverview';
import  ReviewSingle  from './ReviewSingle';

import {
} from '../../modules/reviews'

const Reviews = props => (
    <div>
        <h1>Reviews</h1>
        <Switch>
            <Route exact path='/reviews' component={ReviewOverview}/>
            <Route path='/reviews/:id' component={ReviewSingle}/>
        </Switch>
    </div>
)

const currentReviewFilter = (reviews, id) => {
    console.log(reviews.byId[2]);
    return reviews.byId[2]
}

const mapStateToProps = (state, ownProps) => ({
  currentReview: currentReviewFilter(
      state.reviews,
      ownProps.match.params.id
  )
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: (page) => push(page)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews)
