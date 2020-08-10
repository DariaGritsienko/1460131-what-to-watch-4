import {films} from "./mocks/films";

// начальное состояние
const initialState = {
  genre: `All genres`,
  films,
  page: 0,
  pageSize: 8,
  totalElements: films.length,
};

// Определяем действия
export const ActionType = {
  GENRE_FILMS: `GENRE_FILMS`,
  FILMS_LIST: `FILMS_LIST`,
  SHOW_MORE: `SHOW_MORE`,
};

// Функции определяют объект с действиями
export const genreFilmsAction = (genre) => ({
  type: ActionType.GENRE_FILMS,
  payload: genre,
});

export const filmsListAction = (genre) => ({
  type: ActionType.FILMS_LIST,
  payload: genre,
});

export const showMoreAction = () => ({
  type: ActionType.SHOW_MORE,
});

// Функция для обновления хранилища
export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.SHOW_MORE:
      return {
        pageSize: state.pageSize,
        page: state.page + 1,
        films: state.films,
        totalElements: state.totalElements,
      };

    case ActionType.GENRE_FILMS:
      return {
        films: state.films,
        pageSize: state.pageSize,
        genre: action.payload,
        page: 0,
        totalElements: state.totalElements,
      };

    case ActionType.FILMS_LIST:
      const newFilmsList = [];
      films.map((film) => {
        if (action.payload === `All genres`) {
          newFilmsList.push(film);
        }
        newFilmsList.push(film.genre === action.payload ? film : null);
      });
      return {
        pageSize: state.pageSize,
        genre: action.payload,
        page: 0,
        totalElements: state.totalElements,
        films: newFilmsList.filter((item) => !!item)
      };

    default:
      return state;
  }
};
