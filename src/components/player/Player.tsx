import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import withWidth from "@material-ui/core/withWidth";
import Typography from "@material-ui/core/Typography";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import layoutParams from "../layoutParams";
import { getMediaInfoAction } from "../../redux/actions/media";
import { showAlertAction } from "../../redux/actions/alert";
import { CombinedStore } from "../../redux/reducers";

import { useDispatch, useSelector } from "react-redux";
import Splash from "../widgets/Splash";
import TopBar from "../widgets/TopBar";
import Header from "../widgets/Header";

const LIGHT_GRAY = "#f2f2f2";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    roundedBox: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: LIGHT_GRAY,
      margin: theme.spacing(4, 2, 2, 2),
      borderRadius: theme.spacing(2),
      padding: theme.spacing(2, 0),
    },
    description: {
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "column",
      padding: theme.spacing(2, 2),
    },
  })
);

interface PlayerProps {
  width: string;
}

const Player = ({ width }: PlayerProps) => {
  const classes = useStyles();

  const { id } = useParams();
  const dispatch = useDispatch();
  const { videoSize } = layoutParams[width];

  const { loadingMediaInfo, mediaInfo } = useSelector(
    (state: CombinedStore) => state.media
  );
  const { isTestMode } = useSelector((state: CombinedStore) => state.testMode);
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
      <TopBar isHomePage={false} />
      <div className={classes.roundedBox}>
        <Header text={mediaInfo.Title} />

        <ReactPlayer
          stopOnUnmount
          playing
          controls
          light
          width={videoSize}
          url={mediaInfo.ContentUrl}
          onError={onError}
        />
      </div>
      <div className={classes.roundedBox}>
        <div className={classes.description}>
          <Typography align="left" variant="h6">
            Description:
          </Typography>
          <Typography>{mediaInfo.Description}</Typography>
        </div>
      </div>
    </div>
  );
};

export default withWidth()(Player);
