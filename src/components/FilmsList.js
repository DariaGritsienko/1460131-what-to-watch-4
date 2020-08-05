import React from 'react';
import PropTypes from 'prop-types';
import Films from './Films';

export default class FilmsList extends React.Component {
  constructor(props) {
    super(props);
    this.onMouseCard = this.onMouseCard.bind(this);
    this.state = {
      onMouseCard: false
    };
  }

  onMouseCard(isMouseOnCard) {
    this.setState({onMouseCard: isMouseOnCard});
  }

  render() {
    const {filmsData, onFilmsTitleClick} = this.props;
    return (
      <div className="catalog__movies-list">
        <Films films={filmsData} onMouseCard={this.onMouseCard} onFilmsTitleClick={onFilmsTitleClick} />
      </div>
    );
  }
}

FilmsList.propTypes = {
  filmsData: PropTypes.array.isRequired,
  onFilmsTitleClick: PropTypes.func,
};
