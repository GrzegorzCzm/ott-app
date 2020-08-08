import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import withWidth from "@material-ui/core/withWidth";

import VerticalList from "./VerticalList";
import HorizontalList from "./HorizontalList";
const tileData = [
  { title: "some long title here as a first example", img: "/16_9.jpeg" },
  { title: "a", img: "/16_9.jpeg" },
  { title: "b", img: "/16_9.jpeg" },
  { title: "c", img: "/16_9.jpeg" },
  { title: "d", img: "/16_9.jpeg" },
  { title: "e", img: "/16_9.jpeg" },
  { title: "f", img: "/16_9.jpeg" },
  { title: "g", img: "/16_9.jpeg" },
  { title: "h", img: "/16_9.jpeg" },
  { title: "i", img: "/16_9.jpeg" },
  { title: "some long title here as a second example", img: "/16_9.jpeg" },
  { title: "aa", img: "/16_9.jpeg" },
  { title: "bb", img: "/16_9.jpeg" },
  { title: "cc", img: "/16_9.jpeg" },
];

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

const VideoList = (props: any) => {
  const { width } = props;
  const classes = useStyles();

  const { isHorizontal, cols, cellHeight } = layoutParams[width];

  return (
    <div className={classes.root}>
      {isHorizontal ? (
        <HorizontalList
          tileData={tileData}
          cols={cols}
          cellHeight={cellHeight}
        />
      ) : (
        <VerticalList tileData={tileData} cols={cols} cellHeight={cellHeight} />
      )}
    </div>
  );
};

export default withWidth()(VideoList);
