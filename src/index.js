import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const filmsData = {
  'genres': [`Drama`],
  'years': [`2014`],
  'titles': [`The Grand Budapest Hotel`]
};

ReactDOM.render(
    <App filmsData={filmsData} />,
    document.getElementById(`root`)
);
