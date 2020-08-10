import React from 'react';
import PropTypes from 'prop-types';
import FilmsList from './FilmsList';
import {genreFilmsAction, filmsListAction} from '../reducer';

export default function GenresList({onButtonShowMoreActive, store, onFilmsTitleClick, filmsData}) {
  const [active, setActive] = React.useState(0);

  const openTab = (e, genre) => {
    setActive(+e.target.dataset.index);
    store.dispatch(genreFilmsAction(genre));
    store.dispatch(filmsListAction(genre));
    onButtonShowMoreActive(store.getState().films.length <= store.getState().pageSize * (store.getState().page + 1));
  };
  if (!store) {
    return null;
  }
  const genreList = {'All genres': {genre: `All genres`, content: store.getState().films}};

  filmsData.map((film) => {
    genreList[film.genre] = {genre: film.genre, content: store.getState().films};
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
          filmsData={Object.values(genreList)[active].content.slice(0, store.getState().pageSize * (store.getState().page + 1))}
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
};
