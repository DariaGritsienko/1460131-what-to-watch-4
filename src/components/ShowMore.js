import React from 'react';
import {ActionCreator} from "../reducer/films/films";
import PropTypes from 'prop-types';

export default function ShowMore({store, totalElements, pageSize, page, onButtonClickMore, isButtonShowMoreActive}) {

  const onClickMore = () => {
    store.dispatch(ActionCreator.showMoreAction());
    onButtonClickMore(store.getState().page);
  };

  if (!store || isButtonShowMoreActive || totalElements <= pageSize * (page + 1)) {
    return null;
  }

  return (
    <button
      className="catalog__button"
      type="button"
      onClick={() => onClickMore()}
    >
      Show more
    </button>
  );
}
ShowMore.propTypes = {
  isButtonShowMoreActive: PropTypes.bool,
  store: PropTypes.object,
  onButtonClickMore: PropTypes.func,
  page: PropTypes.number,
  pageSize: PropTypes.number,
  totalElements: PropTypes.number,
};
