import NameSpace from "../name-space";


export const getInfoVideo = (state) => {
  return {
    isVideoPlayerOpen: state[NameSpace.FILMS].isVideoPlayerOpen,
    isPlayVideo: state[NameSpace.FILMS].isPlayVideo,
  };
};
