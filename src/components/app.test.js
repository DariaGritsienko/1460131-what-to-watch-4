import React from "react";
import renderer from "react-test-renderer";
import App from './App';

const filmsData = {
  'genres': [`Comedy`],
  'years': [`1234`],
  'titles': [`Some film1`, `Some film2`, `Some film3`]
};

describe(`Foo`, () => {
  it(`<App /> should render main page in app`, () => {
    const tree = renderer.create(
        <App
          filmsData={filmsData}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
