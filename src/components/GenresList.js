import React from 'react';
import PropTypes from 'prop-types';
import FilmsList from './FilmsList';
import {ActionCreator} from '../reducer/films/films';
export default function GenresList({onButtonShowMoreActive, store, onFilmsTitleClick, filmsData, AllFilms}) {
  const [active, setActive] = React.useState(0);

  const openTab = (e, genre) => {
    setActive(+e.target.dataset.index);
    store.dispatch(ActionCreator.genreFilmsAction(genre));
    onButtonShowMoreActive(filmsData.length <= store.getState().pageSize * (store.getState().page + 1));
  };
  if (!store) {
    return null;
  }
  const genreList = {'All genres': {genre: `All genres`, content: filmsData}};
  AllFilms.map((film) => {
    genreList[film.genre] = {genre: film.genre, content: filmsData};
  });

  return (
    <>
      <ul className="catalog__genres-list">
        {Object.values(genreList).map((film, i) => {
          return (
            <li className={`catalog__genres-item ${i === active ? `catalog__genres-item--active` : ``}`} key={film.genre}>
              <a
                onClick={(e) => {
                  openTab(e, film.genre);
                }}
                className="catalog__genres-link"
                data-index={i}
              >
                {film.genre}
              </a>
            </li>
          );
        })}
      </ul>
      {Object.values(genreList)[active] &&
        <FilmsList
          filmsData={filmsData}
          onFilmsTitleClick = {onFilmsTitleClick}
        />
      }
    </>
  );
}

GenresList.propTypes = {
  store: PropTypes.object,
  onFilmsTitleClick: PropTypes.func,
  onButtonShowMoreActive: PropTypes.func,
  filmsData: PropTypes.array.isRequired,
  AllFilms: PropTypes.array,
};
