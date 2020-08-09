import {films} from "./mocks/films";

// начальное состояние
const initialState = {
  genre: `All genres`,
  films,
};

// Определяем действия
export const ActionType = {
  GENRE_FILMS: `GENRE_FILMS`,
  FILMS_LIST: `FILMS_LIST`,
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

// Функция для обновления хранилища
export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.GENRE_FILMS:
      return {genre: action.payload};

    case ActionType.FILMS_LIST:
      const newFilmsList = [];
      films.map((film) => {
        if (action.payload === `All genres`) {
          newFilmsList.push(film);
        }
        newFilmsList.push(film.genre === action.payload ? film : null);
      });
      return {films: newFilmsList.filter((item) => !!item)};

    default:
      return state;
  }
};
