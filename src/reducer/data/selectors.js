import {createSelector} from "reselect";
import NameSpace from "../name-space";


export const getFilms = (state) => {
  return {
    filmsList: state[NameSpace.DATA].films,
    page: state[NameSpace.FILMS].page,
    pageSize: state[NameSpace.FILMS].pageSize,
    genre: state[NameSpace.FILMS].genre,
  };
};

export const getFilmsListGenre = createSelector(
    getFilms,
    (config) => {
      if (!config || !config.filmsList) {
        return null;
      }
      const filmsContainerGenre = [];
      config.filmsList.forEach((film) => {
        if (film.genre === config.genre) {
          filmsContainerGenre.push(film);
        }
      });
      if (config.genre === `All genres`) {
        return {films: config.filmsList.slice(0, config.pageSize * (config.page + 1)), totalElements: config.filmsList.length};
      } else {
        return {films: filmsContainerGenre.slice(0, config.pageSize * (config.page + 1)), totalElements: filmsContainerGenre.length};
      }
    }
);
