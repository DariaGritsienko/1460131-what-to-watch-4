import React from 'react';
import PropTypes from 'prop-types';

export default class Films extends React.Component {

  onFilmsTitleClick(e, title) {
    const {onFilmsTitleClick} = this.props;
    e.preventDefault();
    onFilmsTitleClick(title);
  }

  render() {
    const {titles} = this.props;

    return (
      <React.Fragment>
        {titles.map((title, index) =>
          <article className="small-movie-card catalog__movies-card" key={index}>
            <div className="small-movie-card__image">
              <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" onClick={(e) => this.onFilmsTitleClick(e, title)} href="movie-page.html">{title}</a>
            </h3>
          </article>
        )}
      </React.Fragment>
    );
  }
}

Films.propTypes = {
  titles: PropTypes.array.isRequired,
  onFilmsTitleClick: PropTypes.func.isRequired
};
