import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {film} = this.props;
    const filmInfo = {
      previewVideoLink: film.preview_video_link,
      previewImage: film.preview_image,
    };
    return (
      <div>
        <video loop="loop" autoPlay muted="muted" src={filmInfo.previewVideoLink} className="player__video" poster={filmInfo.previewImage}></video>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  film: PropTypes.object.isRequired,
};
