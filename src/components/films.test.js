import React from "react";
import renderer from "react-test-renderer";
import Films from './Films';
import {BrowserRouter as Router} from 'react-router-dom';

const films =
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
  };
const index = 1;
describe(`Foo`, () => {
  it(`<Films /> should render cards with titles`, () => {
    const onFilmsTitleClick = jest.fn();

    const tree = renderer.create(
        <Router>
          <Films
            film={films}
            key={index}
            onFilmsTitleClick={onFilmsTitleClick}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

