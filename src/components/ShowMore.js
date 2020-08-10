import React from 'react';
import {showMoreAction} from '../reducer';
import PropTypes from 'prop-types';

export default function ShowMore({store, onButtonClickMore, isButtonShowMoreActive}) {

  const onClickMore = () => {
    store.dispatch(showMoreAction());
    onButtonClickMore(store.getState().page);
  };

  if (!store || isButtonShowMoreActive || store.getState().films.length <= store.getState().pageSize * (store.getState().page + 1)) {
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
  onButtonClickMore: PropTypes.func
};
