import React from 'react';
import PropTypes from 'prop-types';
import Films from './Films';

export default class FilmsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {filmsData, onFilmsTitleClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {filmsData.slice(1).map((film, index) => <Films film={film} key={index} onFilmsTitleClick={onFilmsTitleClick} />)}
      </div>
    );
  }
}

FilmsList.propTypes = {
  filmsData: PropTypes.array.isRequired,
  onFilmsTitleClick: PropTypes.func,
};
