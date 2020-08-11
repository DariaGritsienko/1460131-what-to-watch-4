import {films} from "../../mocks/films";
import {extend} from "../../utils";
// начальное состояние
const initialState = {
  genre: `All genres`,
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

export const ActionCreator = {
  genreFilmsAction: (genre) => ({
    type: ActionType.GENRE_FILMS,
    payload: genre,
  }),

  playVideoAction: (isPlay) => ({
    type: ActionType.PLAY_VIDEO,
    payload: isPlay,
  }),

  openVideoPlayerAction: (isOpen) => ({
    type: ActionType.VIDEOPLAYER_CHANGE,
    payload: isOpen,
  }),

  filmsListAction: (genre) => ({
    type: ActionType.FILMS_LIST,
    payload: genre,
  }),

  showMoreAction: () => ({
    type: ActionType.SHOW_MORE,
  }),
};

// Функция для обновления хранилища
export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.PLAY_VIDEO:
      return extend(state, {
        page: 0,
        isPlayVideo: action.payload,
      });

    case ActionType.VIDEOPLAYER_CHANGE:
      return extend(state, {
        page: 0,
        isVideoPlayerOpen: action.payload,
      });

    case ActionType.SHOW_MORE:
      return extend(state, {
        page: state.page + 1,
      });

    case ActionType.GENRE_FILMS:
      return extend(state, {
        genre: action.payload,
        page: 0,
      });

    default:
      return state;
  }
};
