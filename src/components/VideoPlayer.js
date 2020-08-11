import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {film} = this.props;
    return (
      <div>
        <video loop="loop" autoPlay muted="muted" src={film.preview_video_link} className="player__video" poster={film.preview_image}></video>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  film: PropTypes.object.isRequired,
};
