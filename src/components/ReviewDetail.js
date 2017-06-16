import React, { PropTypes } from 'react'
import ProgressLine from './ProgressLine'

const ReviewDetail = (props) => {

    return (
        <div>
            <div className="review-template-left">
                <div className="profile-card">
                    <img src="http://placehold.it/100x100" alt="" className="profile-image"/>
                    <h2 className="profile-name">lorem ipsum</h2>
                    <h3 className="profile-title">lorem ipsum</h3>
                    <ul className="profile-details">
                        <li className="profile-location">London</li>
                        <li className="profile-team">lorem ipsum</li>
                        <li className="profile-phone">1234</li>
                        <li className="profile-email">lorem ipsum</li>
                        <li className="prifle-role">lorem ipsum</li>
                    </ul>
                    <ul className="profile-reports-to">
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                    </ul>
                    <ul className="profile-direct-reports-to">
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                    </ul>
                </div>
            </div>
            <div className="review-template-right">
                <ProgressLine></ProgressLine>
                <div className="revier-form-container">

                </div>
            </div>

        </div>
    )
}

export default ReviewDetail
