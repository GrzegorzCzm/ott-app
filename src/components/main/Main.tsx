import React, { useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import VideoList from "../videoList/VideoList";
import { fetchMediaAction } from "../../redux/actions/media";
import { useDispatch, useSelector } from "react-redux";
import Splash from "../widgets/Splash";
import TopBar from "../widgets/TopBar";
const DARK_GRAY = "#303030";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: DARK_GRAY,
      height: "100vh",
    },
  })
);

const entitiesMediaData1 = {
  MediaListId: 1,
  IncludeCategories: false,
  IncludeImages: true,
  IncludeMedia: false,
  PageNumber: 1,
  PageSize: 15,
};

const entitiesMediaData2 = {
  MediaListId: 2,
  IncludeCategories: false,
  IncludeImages: true,
  IncludeMedia: false,
  PageNumber: 1,
  PageSize: 15,
};

export default function SpacingGrid() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loadingMediaList } = useSelector((state: any) => state.media);
  const { isTestMode } = useSelector((state: any) => state.testMode);

  useEffect(() => {
    dispatch(fetchMediaAction(entitiesMediaData1, isTestMode));
    dispatch(fetchMediaAction(entitiesMediaData2, isTestMode));
  }, [dispatch, isTestMode]);

  return loadingMediaList ? (
    <Splash />
  ) : (
    <div className={classes.root}>
      <TopBar />
      <VideoList />
    </div>
  );
}
