import React from 'react';
import Main from './Main';
import About from './About';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onFilmsTitleClick = this.onFilmsTitleClick.bind(this);
    this.state = {
      onFilmsTitleClick: ``,
      aboutFilm: [],
    };
  }

  onFilmsTitleClick(isClick) {
    this.setState({onFilmsTitleClick: isClick});
  }

  _renderAbout(filmElement) {
    const {store} = this.props;
    const arr = [];
    if (!filmElement) {
      return null;
    }
    store.getState().films.map((film) => {
      arr.push(filmElement.genre === film.genre && filmElement.title !== film.title ? film : null);
    });
    return (
      <About
        filmData={filmElement}
        moreFilms={arr.filter((item) => !!item)}
        onFilmsTitleClick={(e) => {
          this.onFilmsTitleClick(e);
        }}
      />
    );
  }

  render() {
    const {store} = this.props;
    if (!store) {
      return null;
    }
    const filmData = store.getState().films.find((film) => {
      if (film.title === this.state.onFilmsTitleClick) {
        return true;
      }
      return false;
    });

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Main
              filmsData={store.getState().films}
              store={store}
              onFilmsTitleClick={(e) => {
                this.onFilmsTitleClick(e);
              }}
            />
          </Route>
          <Route path='/about'>
            {this._renderAbout(filmData)}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  store: PropTypes.object
};
