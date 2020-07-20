import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {film, refElem, isTime} = this.props;
    // if(!filmPlay){
    //   return null
    // }
    // play ? filmPlay.play() : filmPlay.pause();
    // console.log(play, filmPlay)
    console.log(this.props)
    if(!isTime){
      return null;
    }
    return (
      <div>
        <video ref={refElem} loop="loop" autoPlay muted="muted" src={film.about.trailer} className="player__video" poster={film.about.poster}></video>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  film: PropTypes.object,
};
