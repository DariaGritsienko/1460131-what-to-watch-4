import React from 'react';
import Main from './Main';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  render() {
    const {filmsData} = this.props;
    return (
      <Main filmsData={filmsData} />
    );
  }
}

App.propTypes = {
  filmsData: PropTypes.object.isRequired
};
