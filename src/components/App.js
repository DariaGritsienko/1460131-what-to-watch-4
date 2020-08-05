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

  _renderAbout(film) {
    if (!film) {
      return null;
    }
    return (
      <About filmData={film} />
    );
  }

  render() {
    const {filmsData} = this.props;
    const filmData = filmsData.find((film) => {
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
              filmsData={filmsData}
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
  filmsData: PropTypes.array.isRequired
};
