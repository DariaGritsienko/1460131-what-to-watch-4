import React from 'react';
import PropTypes from 'prop-types';

const TabContent = ({content}) => (
  <div className="tabcontent">
    {content}
  </div>
);

TabContent.propTypes = {
  content: PropTypes.object.isRequired,
};

export default function Tabs({items}) {
  const [active, setActive] = React.useState(0);

  const openTab = (e) => setActive(+e.target.dataset.index);

  return (
    <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {items.map((item, i) => (
            <li className={`movie-nav__item ${i === active ? `movie-nav__item--active` : ``}`} key={`${item}-${i}`}>
              <a
                className="movie-nav__link"
                onClick={openTab}
                data-index={i}
              >{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      {items[active] && <TabContent {...items[active]} />}
    </>
  );
}

Tabs.propTypes = {
  items: PropTypes.array.isRequired,
};
