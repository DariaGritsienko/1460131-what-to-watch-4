import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {playVideoAction} from '../reducer';

export default class VideoPlayerFull extends PureComponent {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.videoTimeRef = React.createRef();
    this.videoProgressRef = React.createRef();
    this.videoTogglerRef = React.createRef();
  }
  onClose() {
    this.props.onCloseVideoPlayer(false);
  }

  handlePlayVideoPlayer() {
    if (this.props.store.getState().isPlayVideo) {
      this.props.store.dispatch(playVideoAction(false));
      this.videoRef.current.pause();
    } else {
      this.props.store.dispatch(playVideoAction(true));
      this.videoRef.current.play();
    }
  }
  handleFullScreenVideoPlayer() {
    this.videoRef.current.webkitRequestFullscreen();
  }
  secondsToTime(dutation, time) {
    let h = Math.floor(time / (60 * 60));
    let dm = time % (60 * 60);
    let m = Math.floor(dm / 60);
    let ds = dm % 60;
    let s = Math.ceil(ds);
    let fulltime = dutation;
    if (s === 60) {
      s = 0;
      m = m + 1;
    }
    if (s < 10) {
      s = `0` + s;
    }
    if (m === 60) {
      m = 0;
      h = h + 1;
    }
    if (m < 10) {
      m = `0` + m;
    }
    if (h === 0) {
      fulltime = m + `:` + s;
    } else {
      fulltime = h + `:` + m + `:` + s;
    }
    const styleLeft = 1728 / Math.ceil(dutation);
    this.videoTimeRef.current.textContent = fulltime;
    this.videoTogglerRef.current.setAttribute(`style`, `left: ${Math.ceil(ds) * styleLeft}px`);
    this.videoProgressRef.current.setAttribute(`value`, Math.ceil(ds));
    this.videoProgressRef.current.setAttribute(`max`, Math.ceil(dutation));
    return fulltime;
  }
  render() {
    const {film} = this.props;

    return (
      <div className="player">
        <video
          src={film.about.trailer}
          ref={this.videoRef}
          onTimeUpdate={() => {
            this.secondsToTime(this.videoRef.current.duration, this.videoRef.current.currentTime);
          }}
          className="player__video"
          poster={film.about.poster}
        >
        </video>

        <button
          type="button"
          onClick={() => this.onClose(false)}
          className="player__exit"
        >
          Exit
        </button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" ref={this.videoProgressRef}></progress>
              <div className="player__toggler" ref={this.videoTogglerRef}>Toggler</div>
            </div>
            <div className="player__time-value" ref={this.videoTimeRef}></div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play" onClick={() => this.handlePlayVideoPlayer()}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen" onClick={() => this.handleFullScreenVideoPlayer()}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

VideoPlayerFull.propTypes = {
  film: PropTypes.object.isRequired,
  store: PropTypes.object,
  onCloseVideoPlayer: PropTypes.func,
};
