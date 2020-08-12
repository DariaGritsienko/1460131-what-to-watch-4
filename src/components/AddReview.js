import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getReviewStatus} from '../reducer/user/selectors';

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this.textRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      rating: ``,
    };
  }

  handleSubmit(evt) {
    const {onSubmit, history, reviewStatus} = this.props;
    evt.preventDefault();

    onSubmit({
      rating: this.state.rating,
      text: this.textRef.current.value,
    });
    if (reviewStatus !== `SUCCESSFULL`) {
      return null;
    } else {
      return history.push(`/about`);
    }
  }

  render() {
    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="movie-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form action="" onSubmit={this.handleSubmit} className="add-review__form">
            <div className="rating">
              <div className="rating__stars">
                <input
                  className="rating__input"
                  id="star-1"
                  type="radio"
                  onChange={(evt) => {
                    this.setState({rating: evt.target.value});
                  }}
                  name="rating"
                  value="1"
                />
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input
                  className="rating__input"
                  id="star-2"
                  type="radio"
                  onChange={(evt) => {
                    this.setState({rating: evt.target.value});
                  }}
                  name="rating"
                  value="2"
                />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input
                  className="rating__input"
                  id="star-3"
                  type="radio"
                  onChange={(evt) => {
                    this.setState({rating: evt.target.value});
                  }}
                  name="rating"
                  value="3"
                  checked
                />
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input
                  className="rating__input"
                  id="star-4"
                  type="radio"
                  onChange={(evt) => {
                    this.setState({rating: evt.target.value});
                  }}
                  name="rating"
                  value="4"
                />
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input
                  className="rating__input"
                  id="star-5"
                  type="radio"
                  onChange={(evt) => {
                    this.setState({rating: evt.target.value});
                  }}
                  name="rating"
                  value="5"
                />
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" ref={this.textRef} minLength={50} maxLength={400} name="review-text" id="review-text" placeholder="Review text"></textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  reviewStatus: getReviewStatus(state),
});
export {AddReview};
export default connect(mapStateToProps)(AddReview);

AddReview.propTypes = {
  history: PropTypes.object,
  onSubmit: PropTypes.func,
  reviewStatus: PropTypes.string,
};
