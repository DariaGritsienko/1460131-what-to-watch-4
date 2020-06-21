import React from 'react';
import Main from './Main';
/* eslint react/prop-types: 0 */
export default class App extends React.Component {
  render() {
    const {filmsData} = this.props;
    return (
      <Main filmsData={filmsData} />
    );
  }
}
