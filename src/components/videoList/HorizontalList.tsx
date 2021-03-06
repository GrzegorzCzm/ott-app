import React from "react";
import { Link } from "react-router-dom";
import { Img } from "react-image";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import CircularProgress from "@material-ui/core/CircularProgress";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Header from "../widgets/Header";
import { getImageUrl } from "./utils";
const LIGHT_GRAY = "#f2f2f2";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: LIGHT_GRAY,
      margin: theme.spacing(0, 2, 2, 2),
      borderRadius: theme.spacing(2),
      padding: theme.spacing(2, 0),
    },
    gridList: {
      flexWrap: "nowrap",
      transform: "translateZ(0)",
    },
    titleBar: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
  })
);

interface HorizontalListParams {
  tileData: any;
  cols: number;
  cellHeight: number;
  title: string;
}

export default function HorizontalList({
  tileData,
  cols,
  cellHeight,
  title,
}: HorizontalListParams) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header text={title} />
      <GridList
        className={classes.gridList}
        cols={cols}
        cellHeight={cellHeight}
      >
        {tileData.map((tile: any) => (
          <GridListTile key={tile.Title}>
            <Link to={`/player/${tile.Id}`}>
              <Img
                src={[getImageUrl(tile.Images), "/noimage.png"]}
                loader={<CircularProgress size={24} />}
                height={`${cellHeight}px`}
                alt={tile.Title}
              />
              <GridListTileBar
                title={tile.Title}
                classes={{
                  root: classes.titleBar,
                }}
              />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
