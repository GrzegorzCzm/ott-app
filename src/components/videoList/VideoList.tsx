import React from "react";
import { useSelector } from "react-redux";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import withWidth from "@material-ui/core/withWidth";
import VerticalList from "./VerticalList";
import HorizontalList from "./HorizontalList";
import MainHeader from "./MainHeader";

const DARK_GRAY = "#303030";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: DARK_GRAY,
    },
  })
);

const layoutParams: any = {
  xs: { isHorizontal: false, cols: 2, cellHeight: 140 },
  sm: { isHorizontal: false, cols: 3, cellHeight: 140 },
  md: { isHorizontal: true, cols: 5, cellHeight: 140 },
  lg: { isHorizontal: true, cols: 6, cellHeight: 140 },
  xl: { isHorizontal: true, cols: 7, cellHeight: 270 },
};

const videoListTitles = ["The newest hits", "Top movies", "Trending hits"];
const VideoList = (props: any) => {
  const { width } = props;
  const classes = useStyles();
  const { entitiesList } = useSelector((state: any) => state.media);
  const { isHorizontal, cols, cellHeight } = layoutParams[width];

  return (
    <div className={classes.root}>
      <MainHeader text="OOT player" />
      {isHorizontal
        ? entitiesList.map((entities: any, index: number) => (
            <HorizontalList
              tileData={entities}
              cols={cols}
              cellHeight={cellHeight}
              title={videoListTitles[index]}
            />
          ))
        : entitiesList.map((entities: any, index: number) => (
            <VerticalList
              tileData={entities}
              cols={cols}
              cellHeight={cellHeight}
              title={videoListTitles[index]}
            />
          ))}
    </div>
  );
};

export default withWidth()(VideoList);
