import React from "react";
import renderer from "react-test-renderer";
import Films from './Films';

const titles = [
  `Some film1`, `Some film2`, `Some film3`
];

describe(`Foo`, () => {
  it(`<Films /> should render cards with titles`, () => {
    const onFilmsTitleClick = jest.fn();
    const tree = renderer.create(
        <Films
          titles={titles}
          onFilmsTitleClick={onFilmsTitleClick}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

