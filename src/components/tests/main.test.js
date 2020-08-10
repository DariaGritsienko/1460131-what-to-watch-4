import React from "react";
import renderer from "react-test-renderer";
import Main from '../Main';

const filmsData = [
  {
    title: `Some film1`,
    year: `1234`,
    genre: `Comedy`,
    about: {
      poster: `img/the-grand-budapest-hotel-poster.jpg`,
      cover: `img/bg-the-grand-budapest-hotel.jpg`,
      score: `8,9`,
      level: `Very good`,
      rating: `240 ratings`,
      text: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      moreText: `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
      director: `Wes Andreson`,
      starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
      trailer: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      runTime: `1h 39m`,
      reviewer: [
        {
          reviewerName: `Kate Muir`,
          reviewDate: `2016-12-24`,
          reviewText: [`Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`],
          score: `8,9`,
        },
        {
          reviewerName: `Bill Goodykoontz`,
          reviewDate: `2015-11-18`,
          reviewText: [`Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`],
          score: `8,0`,
        },
      ]
    },
  },
];

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
