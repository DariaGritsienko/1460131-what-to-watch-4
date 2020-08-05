import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {films} from './mocks/films';

ReactDOM.render(
    <App filmsData={films} />,
    document.getElementById(`root`)
);
