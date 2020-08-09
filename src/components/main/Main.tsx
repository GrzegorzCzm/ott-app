import React, { useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import VideoList from "../videoList/VideoList";
import { fetchMediaAction } from "../../redux/actions/media";
import { useDispatch, useSelector } from "react-redux";
import Splash from "../widgets/Splash";
import TopBar from "../widgets/TopBar";
import { CombinedStore } from "../../redux/reducers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
    },
  })
);

const mediaListIds = [1, 2, 3];

export default function SpacingGrid() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loadingMediaList, entitiesList } = useSelector(
    (state: CombinedStore) => state.media
  );
  const { isTestMode } = useSelector((state: CombinedStore) => state.testMode);

  useEffect(() => {
    if (!entitiesList.length)
      dispatch(fetchMediaAction(mediaListIds, isTestMode));
  }, [dispatch, entitiesList.length, isTestMode]);

  return loadingMediaList ? (
    <Splash />
  ) : (
    <div className={classes.root}>
      <TopBar isHomePage={true} />
      <VideoList />
    </div>
  );
}
