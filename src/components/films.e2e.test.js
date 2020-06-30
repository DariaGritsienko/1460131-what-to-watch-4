import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Films from "./Films";

Enzyme.configure({
  adapter: new Adapter(),
});

const titles = [
  `Some film1`, `Some film2`, `Some film3`
];

describe(`Films`, () => {
  it(`Should title be pressed`, () => {
    const onFilmsTitleClick = jest.fn();
    const preventDefault = jest.fn();

    const films = shallow(
        <Films
          titles={titles}
          onFilmsTitleClick={onFilmsTitleClick}
        />
    );

    const filmsTitle = films.find(`a.small-movie-card__link`);

    filmsTitle.forEach((filmTitle) => {
      filmTitle.simulate(`click`, {preventDefault});
    });

    expect(onFilmsTitleClick.mock.calls.length).toBe(titles.length);
  });
});

