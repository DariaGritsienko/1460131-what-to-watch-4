import * as React from "react";
import * as renderer from "react-test-renderer";
import AddReview from "../AddReview";
import configureStore from "redux-mock-store";
import {noop} from "../../utils";
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import NameSpace from "../../reducer/name-space";

const mockStore = configureStore([]);

it(`AddReview component render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      reviewStatus: `NO_SUCCESSFULL`,
    }
  });
  const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <AddReview
            onSubmit={noop}
          />
        </Router>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
