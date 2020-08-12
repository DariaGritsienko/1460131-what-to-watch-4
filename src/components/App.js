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
import MyList from './MyList';
import {Operation as UserOperation} from "../reducer/user/user";
import {getAuthorizationStatus} from "../reducer/user/selectors";
import AddReview from './AddReview';
import VideoPlayerFull from './VideoPlayerFull';
import {getInfoVideo} from '../reducer/films/selectors';

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
    const {filmsListLittle, outOfList, addToList, store, authorizationStatus} = this.props;
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
        outOfList={outOfList}
        history={history}
        addToList={addToList}
        moreFilms={arr.filter((item) => !!item)}
        onFilmsTitleClick={(e) => {
          this.onFilmsTitleClick(e);
        }}
      />
    );
  }

  render() {
    const {authorizationStatus, video, addToList, outOfList, filmsListLittle, films: {filmsList, page, pageSize}, store, login, review} = this.props;
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
          <Route exact path={AppRoute.ROOT}>
            <Main
              filmsData={filmsListLittle.films}
              authorizationStatus={authorizationStatus}
              page={page}
              outOfList={outOfList}
              addToList={addToList}
              history={history}
              pageSize={pageSize}
              totalElements={filmsListLittle.totalElements}
              AllFilms={filmsList}
              store={store}
              onFilmsTitleClick={(e) => {
                this.onFilmsTitleClick(e);
              }}
            />
          </Route>
          <Route exact path={AppRoute.MYLIST}>
            <MyList
              onFilmsTitleClick={(e) => {
                this.onFilmsTitleClick(e);
              }}
              filmsData={filmsList}
            />
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <SignIn
              onSubmit={login}
              history={history}
            />
          </Route>
          <Route exact path={AppRoute.PLAYER}>
            <VideoPlayerFull
              history={history}
              store={store}
              video={video}
            />
          </Route>
          <Route exact path={AppRoute.ADD_REVIEW}>
            <AddReview
              onSubmit={review}
              history={history}
            />
          </Route>
          <Route path={AppRoute.ABOUT}>
            {this._renderAbout(filmData, history)}
          </Route>
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  video: getInfoVideo(state),
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
  outOfList(authData) {
    dispatch(UserOperation.outOfList(authData));
  },
  addToList(authData) {
    dispatch(UserOperation.addToList(authData));
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
  addToList: PropTypes.func,
  outOfList: PropTypes.func,
  history: PropTypes.object,
  video: PropTypes.object,
};
