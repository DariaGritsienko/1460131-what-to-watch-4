import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Films from "./Films";

Enzyme.configure({
  adapter: new Adapter(),
});

const films = [
  {
    title: `Some film2`,
    year: `2014`,
    genre: `Drama`,
    about: {
      poster: `img/the-grand-budapest-hotel-poster.jpg`,
      cover: `img/bg-the-grand-budapest-hotel.jpg`,
      score: `8,9`,
      level: `Very good`,
      rating: `240 ratings`,
      text: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      moreText: `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
      director: `Director: Wes Andreson`,
      starring: `Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    },
  },
];

describe(`Films`, () => {
  it(`Should title be pressed`, () => {
    const onFilmsTitleClick = jest.fn();
    const preventDefault = jest.fn();

    const filmsElement = shallow(
        <Films
          films={films}
          onFilmsTitleClick={onFilmsTitleClick}
        />
    );

    const filmsTitle = filmsElement.find(`a.small-movie-card__link`);

    filmsTitle.forEach((filmTitle) => {
      filmTitle.simulate(`click`, {preventDefault});
    });
  });
});

