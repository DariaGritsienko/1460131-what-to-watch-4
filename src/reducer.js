import {films} from "./mocks/films";

// начальное состояние
const initialState = {
  genre: `All genres`,
  films,
  page: 0,
  pageSize: 8,
  totalElements: films.length,
  isVideoPlayerOpen: false,
  isPlayVideo: false,
};

// Определяем действия
export const ActionType = {
  GENRE_FILMS: `GENRE_FILMS`,
  FILMS_LIST: `FILMS_LIST`,
  SHOW_MORE: `SHOW_MORE`,
  VIDEOPLAYER_CHANGE: `VIDEOPLAYER_CHANGE`,
  PLAY_VIDEO: `PLAY_VIDEO`,
};

// Функции определяют объект с действиями
export const genreFilmsAction = (genre) => ({
  type: ActionType.GENRE_FILMS,
  payload: genre,
});

export const playVideoAction = (isPlay) => ({
  type: ActionType.PLAY_VIDEO,
  payload: isPlay,
});

export const openVideoPlayerAction = (isOpen) => ({
  type: ActionType.VIDEOPLAYER_CHANGE,
  payload: isOpen,
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

    case ActionType.PLAY_VIDEO:
      return {
        films: state.films,
        pageSize: state.pageSize,
        genre: action.payload,
        page: 0,
        isPlayVideo: action.payload,
      };

    case ActionType.VIDEOPLAYER_CHANGE:
      return {
        films: state.films,
        pageSize: state.pageSize,
        genre: action.payload,
        page: 0,
        isVideoPlayerOpen: action.payload,
      };

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
