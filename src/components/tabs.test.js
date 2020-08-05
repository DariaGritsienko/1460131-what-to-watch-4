import React from "react";
import renderer from "react-test-renderer";
import Tabs from './Tabs';
import Review from './Review';

const reviewer =
  {
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
  };

describe(`Foo`, () => {
  it(`<Tabs /> should render Tabs`, () => {
    const items = [
      {title: `Reviews`, content: <Review reviewer={reviewer}/>},
      {title: `Overview`, content: <Review reviewer={reviewer}/>},
      {title: `Details`, content: <Review reviewer={reviewer}/>},
    ];
    const tree = renderer.create(
        <Tabs
          items={items}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

