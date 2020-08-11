import React from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs';
// import Review from './Review';
import {connect} from "react-redux";
import Films from './Films';
import VideoPlayerFull from './VideoPlayerFull';
import {ActionCreator} from "../reducer/films/films";
import {getInfoVideo} from '../reducer/films/selectors';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  onButtonPlayClick() {
    this.props.store.dispatch(ActionCreator.openVideoPlayerAction(true));
    this.setState({isVideoPlayerOpen: true});
  }

  onCloseVideoPlayer(isPlay) {
    this.setState({isVideoPlayerOpen: isPlay});
    this.props.store.dispatch(ActionCreator.openVideoPlayerAction(isPlay));
  }

  renderOverview() {
    const {filmData} = this.props;
    if (!filmData || !filmData.starring) {
      return null;
    }
    const starring = filmData.starring.slice(0, 4).join(`, `);
    return (
        <>
          <div className="movie-rating">
            <div className="movie-rating__score">{filmData.rating}</div>
            <p className="movie-rating__meta">
              <span className="movie-rating__level">Very good</span>
              <span className="movie-rating__count">{filmData.scores_count} ratings</span>
            </p>
          </div>

          <div className="movie-card__text">
            <p>{filmData.description}</p>
            {/* <p>{filmData.about.moreText}</p> */}
            <p className="movie-card__director"><strong>Director: {filmData.director}</strong></p>
            <p className="movie-card__starring"><strong>Starring: {starring} and other</strong></p>
          </div>
        </>
    );
  }

  renderDetails() {
    const {filmData} = this.props;
    if (!filmData || !filmData.starring) {
      return null;
    }
    return (
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{filmData.director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {filmData.starring.map((elem, index) => {
                const name = index !== filmData.starring.length - 1 ? `${elem},` : `${elem}`;
                return (
                  <span key={index}>
                    {name} <br />
                  </span>
                );
              })}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{filmData.run_time}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{filmData.genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{filmData.released}</span>
          </p>
        </div>
      </div>
    );
  }

  renderReviews() {
    // const {filmData} = this.props;

    return (
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {/* {filmData.about.reviewer.slice(0, 3).map((review, index) => {
            return <Review key={`${review}-${index}`} reviewer={review} />;
          })} */}
        </div>
        <div className="movie-card__reviews-col">
          {/* {filmData.about.reviewer.slice(3, filmData.starring.length).map((review, index) => {
            return <Review key={`${review}-${index}`} reviewer={review} />;
          })} */}
        </div>
      </div>
    );
  }

  render() {
    const {filmData, moreFilms, onFilmsTitleClick, store, video: {isVideoPlayerOpen}} = this.props;
    const items = [
      {title: `Overview`, content: this.renderOverview()},
      {title: `Details`, content: this.renderDetails()},
      {title: `Reviews`, content: this.renderReviews()},
    ];
    if (!store || !filmData) {
      return null;
    }

    return (
      <>
        {
          isVideoPlayerOpen
            && <VideoPlayerFull
              onCloseVideoPlayer={(isPlay) => this.onCloseVideoPlayer(isPlay)}
              store={store}
            />
            || <div>
              <section className="movie-card movie-card--full">
                <div className="movie-card__hero">
                  <div className="movie-card__bg">
                    <img src={filmData.background_image} alt={filmData.name} />
                  </div>

                  <h1 className="visually-hidden">WTW</h1>

                  <header className="page-header movie-card__head">
                    <div className="logo">
                      <a href="main.html" className="logo__link">
                        <span className="logo__letter logo__letter--1">W</span>
                        <span className="logo__letter logo__letter--2">T</span>
                        <span className="logo__letter logo__letter--3">W</span>
                      </a>
                    </div>

                    <div className="user-block">
                      <div className="user-block__avatar">
                        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                      </div>
                    </div>
                  </header>

                  <div className="movie-card__wrap">
                    <div className="movie-card__desc">
                      <h2 className="movie-card__title">{filmData.name}</h2>
                      <p className="movie-card__meta">
                        <span className="movie-card__genre">{filmData.genre}</span>
                        <span className="movie-card__year">{filmData.released}</span>
                      </p>

                      <div className="movie-card__buttons">
                        <button className="btn btn--play movie-card__button" onClick={() => this.onButtonPlayClick()} type="button">
                          <svg viewBox="0 0 19 19" width="19" height="19">
                            <use xlinkHref="#play-s"></use>
                          </svg>
                          <span>Play</span>
                        </button>
                        <button className="btn btn--list movie-card__button" type="button">
                          <svg viewBox="0 0 19 20" width="19" height="20">
                            <use xlinkHref="#add"></use>
                          </svg>
                          <span>My list</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="movie-card__wrap movie-card__translate-top">
                  <div className="movie-card__info">
                    <div className="movie-card__poster movie-card__poster--big">
                      <img src={filmData.poster_image} alt={filmData.name} width="218" height="327" />
                    </div>

                    <div className="movie-card__desc">
                      <Tabs items={items} />
                    </div>
                  </div>
                </div>
              </section>

              <div className="page-content">
                <section className="catalog catalog--like-this">
                  <h2 className="catalog__title">More like this</h2>

                  <div className="catalog__movies-list">
                    {
                      moreFilms.slice(0, 4).map((film, index) => {
                        return <Films key={`More like this film-${index}`} film={film} onFilmsTitleClick={onFilmsTitleClick}/>;
                      })
                    }
                  </div>
                </section>
                <footer className="page-footer">
                  <div className="logo">
                    <a className="logo__link logo__link--light">
                      <span className="logo__letter logo__letter--1">W</span>
                      <span className="logo__letter logo__letter--2">T</span>
                      <span className="logo__letter logo__letter--3">W</span>
                    </a>
                  </div>

                  <div className="copyright">
                    <p>© 2019 What to watch Ltd.</p>
                  </div>
                </footer>
              </div>
            </div>
        }
      </>
    );
  }

}
const mapStateToProps = (state) => ({
  video: getInfoVideo(state),
});

export {About};
export default connect(mapStateToProps)(About);
About.propTypes = {
  video: PropTypes.object,
  isVideoPlayerOpen: PropTypes.bool,
  store: PropTypes.object,
  filmData: PropTypes.object.isRequired,
  moreFilms: PropTypes.array.isRequired,
  onFilmsTitleClick: PropTypes.func
};
