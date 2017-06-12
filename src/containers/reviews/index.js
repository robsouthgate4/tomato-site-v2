import React from 'react'
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import  ReviewForm  from '../../components/ReviewForm';
import { getReviews } from '../../services/reviews';


class Reviews extends React.Component {

    componentDidMount = () => {
        console.log(this.props);
        getReviews('2')
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
<<<<<<< HEAD

=======
    console.log(reviews.byId[2]);
    return reviews.byId[2]
>>>>>>> 417cfe55874d781f8fb501ce341af41b734ba7d3
}

const mapStateToProps = (state, {match}) => ({
    filter: match
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: (page) => push(page)
}, dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews))
