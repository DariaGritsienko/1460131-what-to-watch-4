import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class Review extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {reviewer} = this.props;
    return (
      <div className="review">
        <blockquote className="review__quote">
          <p className="review__text">{reviewer.reviewText}</p>

          <footer className="review__details">
            <cite className="review__author">{reviewer.reviewerName}</cite>
            <time className="review__date" dateTime={reviewer.reviewDate}>{reviewer.reviewDate}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{reviewer.score}</div>
      </div>
    );
  }
}

Review.propTypes = {
  reviewer: PropTypes.object.isRequired,
};
