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
    const {filmsData} = this.props;

    return (
      <div className="catalog__movies-list">
        <Films titles={filmsData.titles.slice(1)} onMouseCard={this.onMouseCard} onFilmsTitleClick = {() => {}} />
      </div>
    );
  }
}

FilmsList.propTypes = {
  filmsData: PropTypes.object.isRequired,
  onFilmsTitleClick: PropTypes.func,
};
