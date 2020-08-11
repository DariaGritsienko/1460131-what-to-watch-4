import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
export default class Films extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      onMouseCard: false,
      time: 1,
    };
  }

  onFilmsTitleClick(e, title) {
    const {onFilmsTitleClick} = this.props;
    onFilmsTitleClick(title);
  }

  render() {
    const {film} = this.props;
    const isTime = this.state.time && this.state.onMouseCard;
    const filmInfo = {
      posterImage: film.poster_image,
    };
    return (
      <React.Fragment>
        <article
          className="small-movie-card catalog__movies-card"
          onMouseOver={()=>{
            this.setState({onMouseCard: true});
          }}
          onMouseLeave={()=>{
            this.setState({onMouseCard: false});
          }}
        >
          <div className="small-movie-card__image">
            {isTime ? <VideoPlayer film={film} /> :
              <img src={filmInfo.posterImage} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />}
          </div>
          <h3 className="small-movie-card__title">
            <Link className="small-movie-card__link" onClick={(e) => this.onFilmsTitleClick(e, film.name)} to="/about">{film.name}</Link>
          </h3>
        </article>
      </React.Fragment>
    );
  }
}

Films.propTypes = {
  film: PropTypes.object.isRequired,
  onFilmsTitleClick: PropTypes.func,
  onMouseCard: PropTypes.func,
};
