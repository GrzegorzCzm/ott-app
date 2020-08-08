import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { getMediaInfoAction } from "../../redux/actions/media";
import { showAlertAction } from "../../redux/actions/alert";
import { useDispatch, useSelector } from "react-redux";
import Splash from "../widgets/Splash";

const Player = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loadingMediaInfo, mediaInfo } = useSelector(
    (state: any) => state.media
  );
  const { isTestMode } = useSelector((state: any) => state.testMode);
  useEffect(() => {
    dispatch(getMediaInfoAction({ mediaId: id }, isTestMode));
  }, [dispatch, id, isTestMode]);

  const onError = (error: any) => {
    dispatch(
      showAlertAction(
        error.error?.message ||
          "Unexpected error has happened. Unable to play video"
      )
    );
  };
  return loadingMediaInfo ? (
    <Splash />
  ) : (
    <div>
      <ReactPlayer
        stopOnUnmount
        playing
        controls
        light
        url={mediaInfo.ContentUrl}
        onError={onError}
      />
    </div>
  );
};

export default Player;
