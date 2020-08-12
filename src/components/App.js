import React from 'react';
import Main from './Main';
import {connect} from "react-redux";
import About from './About';
import PropTypes from 'prop-types';
import {Switch, Route, Router} from "react-router-dom";
import {getFilms, getFilmsListGenre} from '../reducer/data/selectors';
import {AppRoute} from '../const';
import history from "../history";
import SignIn from './SignIn';
import {Operation as UserOperation} from "../reducer/user/user";
import {getAuthorizationStatus} from "../reducer/user/selectors";
import AddReview from './AddReview';

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
    const {filmsListLittle, store, authorizationStatus} = this.props;
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
        authorizationStatus={authorizationStatus}
        store={store}
        moreFilms={arr.filter((item) => !!item)}
        onFilmsTitleClick={(e) => {
          this.onFilmsTitleClick(e);
        }}
      />
    );
  }

  render() {
    const {authorizationStatus, filmsListLittle, films: {filmsList, page, pageSize}, store, login, review} = this.props;
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
      <Router history={history}>
        <Switch>
          <Route exact path='/'>
            <Main
              filmsData={filmsListLittle.films}
              authorizationStatus={authorizationStatus}
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
          <Route exact path={AppRoute.LOGIN}>
            <SignIn
              onSubmit={login}
              history={history}
            />
          </Route>
          <Route exact path={AppRoute.ADD_REVIEW}>
            <AddReview
              onSubmit={review}
              history={history}
            />
          </Route>
          <Route path='/about'>
            {this._renderAbout(filmData)}
          </Route>
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  films: getFilms(state),
  filmsListLittle: getFilmsListGenre(state),
});
const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  review(authData) {
    dispatch(UserOperation.review(authData));
  },
});
export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
App.propTypes = {
  filmsListLittle: PropTypes.object,
  authorizationStatus: PropTypes.string,
  store: PropTypes.object,
  films: PropTypes.object,
  filmsList: PropTypes.array,
  page: PropTypes.number,
  pageSize: PropTypes.number,
  login: PropTypes.func,
  review: PropTypes.func,
};
