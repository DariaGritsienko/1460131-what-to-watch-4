const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};
const Success = {
  SUCCESSFULL: `SUCCESSFULL`,
  NO_SUCCESSFULL: `NO_SUCCESSFULL`,
};
const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  addReview: Success.NO_SUCCESSFULL,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  ADD_REVIEW: `ADD_REVIEW`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  addReview: (status) => {
    return {
      type: ActionType.ADD_REVIEW,
      payload: status,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.ADD_REVIEW:
      return Object.assign({}, state, {
        addReview: action.payload,
      });
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      });
  },

  review: (authData) => (dispatch, getState, api) => {
    return api.post(`/review`, {
      rating: authData.rating,
      text: authData.text,
    })
      .then(() => {
        dispatch(ActionCreator.addReview(Success.SUCCESSFULL));
      })
      .catch(() => {
        dispatch(ActionCreator.addReview(Success.NO_SUCCESSFULL));
      });
  },
};


export {
  ActionCreator,
  ActionType,
  AuthorizationStatus,
  Operation,
  reducer,
};
