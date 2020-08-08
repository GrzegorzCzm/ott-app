import React, { useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import VideoList from "../videoList/VideoList";
import { fetchMediaAction } from "../../redux/actions/media";
import { useDispatch, useSelector } from "react-redux";
import Splash from "../widgets/Splash";
const DARK_GRAY = "#303030";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: DARK_GRAY,
      height: "100vh",
    },
  })
);

const entitiesMediaData = {
  MediaListId: 2,
  IncludeCategories: false,
  IncludeImages: true,
  IncludeMedia: false,
  PageNumber: 1,
  PageSize: 10,
};

export default function SpacingGrid() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loadingMediaList } = useSelector((state: any) => state.media);

  useEffect(() => {
    dispatch(fetchMediaAction(entitiesMediaData));
  }, [dispatch]);

  return loadingMediaList ? (
    <Splash />
  ) : (
    <div className={classes.root}>
      : <VideoList />
    </div>
  );
}
