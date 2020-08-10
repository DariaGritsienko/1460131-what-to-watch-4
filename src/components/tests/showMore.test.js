import React from "react";
import renderer from "react-test-renderer";
import ShowMore from '../ShowMore';


describe(`Foo`, () => {
  it(`<ShowMore /> should render ShowMore`, () => {
    const onButtonClickMore = jest.fn();
    const isButtonShowMoreActive = false;
    const tree = renderer.create(
        <ShowMore
          onButtonClickMore={onButtonClickMore}
          isButtonShowMoreActive={isButtonShowMoreActive}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

