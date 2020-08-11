import * as React from "react";
import * as renderer from "react-test-renderer";
import SignIn from "../SignIn";
import {noop} from "../../utils";
import {BrowserRouter as Router} from 'react-router-dom';

it(`SignIn component render correctly`, () => {
  const tree = renderer.create(
      <Router>
        <SignIn
          onSubmit={noop}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
