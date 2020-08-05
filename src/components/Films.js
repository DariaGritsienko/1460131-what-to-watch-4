import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default class Films extends PureComponent {
  constructor(props) {
    super(props);
    this.onCard = this.onCard.bind(this);
    this.outCard = this.outCard.bind(this);
    this.state = {
      onMouseCard: false
    };
  }

  onCard() {
    this.setState({onMouseCard: true});
  }

  outCard() {
    this.setState({onMouseCard: false});
  }

  onFilmsTitleClick(e, title) {
    const {onFilmsTitleClick} = this.props;
    onFilmsTitleClick(title);
  }

  render() {
    const {films} = this.props;
    return (
      <React.Fragment>
        {films.slice(1).map((film, index) =>
          <article
            className="small-movie-card catalog__movies-card"
            onMouseOver={this.onCard}
            onMouseLeave={this.outCard}
            key={index}
          >
            <div className="small-movie-card__image">
              <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
            </div>
            <h3 className="small-movie-card__title">
              <Link className="small-movie-card__link" onClick={(e) => this.onFilmsTitleClick(e, film.title)} to="/about">{film.title}</Link>
            </h3>
          </article>
        )}
      </React.Fragment>
    );
  }
}

Films.propTypes = {
  films: PropTypes.array,
  onFilmsTitleClick: PropTypes.func,
  onMouseCard: PropTypes.func,
};
