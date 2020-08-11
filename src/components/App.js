import React from 'react';
import Main from './Main';
import {connect} from "react-redux";
import About from './About';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {getFilms, getFilmsListGenre} from '../reducer/data/selectors';

class App extends React.Component {
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
    const {filmsListLittle, store} = this.props;
    const arr = [];

    if (!filmElement || !filmsListLittle) {
      return null;
    }
    filmsListLittle.films.map((film) => {
      arr.push(filmElement.genre === film.genre && filmElement.name !== film.name ? film : null);
    });

    return (
      <About
        filmData={filmElement}
        store={store}
        moreFilms={arr.filter((item) => !!item)}
        onFilmsTitleClick={(e) => {
          this.onFilmsTitleClick(e);
        }}
      />
    );
  }

  render() {
    const {filmsListLittle, films: {filmsList, page, pageSize}, store} = this.props;
    if (!filmsListLittle || !filmsList) {
      return null;
    }

    const filmData = filmsListLittle.films.find((film) => {
      if (film.name === this.state.onFilmsTitleClick) {
        return true;
      }
      return false;
    });

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Main
              filmsData={filmsListLittle.films}
              page={page}
              pageSize={pageSize}
              totalElements={filmsListLittle.totalElements}
              AllFilms={filmsList}
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
const mapStateToProps = (state) => ({
  films: getFilms(state),
  filmsListLittle: getFilmsListGenre(state),
});

export {App};
export default connect(mapStateToProps)(App);
App.propTypes = {
  filmsListLittle: PropTypes.object,
  store: PropTypes.object,
  films: PropTypes.object,
  filmsList: PropTypes.array,
  page: PropTypes.number,
  pageSize: PropTypes.number,
};
