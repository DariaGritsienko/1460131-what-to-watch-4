import React from "react";
import renderer from "react-test-renderer";
import Main from './Main';

const filmsData = {
  'genres': [`Comedy`],
  'years': [`1234`],
  'titles': [`Some film1`, `Some film2`, `Some film3`]
};

describe(`Foo`, () => {
  it(`<Main /> should render main page`, () => {
    const tree = renderer.create(
        <Main
          filmsData={filmsData}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
