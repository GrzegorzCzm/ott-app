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
      margin: theme.spacing(4, 2, 2, 2),
      borderRadius: theme.spacing(2),
      padding: theme.spacing(2, 0),
    },
    gridList: {
      height: "40vh",
    },
  })
);

interface VerticalListParams {
  tileData: any;
  cols: number;
  cellHeight: number;
  title: string;
}

export default function VerticalList({
  tileData,
  cols,
  cellHeight,
  title,
}: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header text={title} />
      <GridList
        cellHeight={cellHeight}
        className={classes.gridList}
        cols={cols}
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
              <GridListTileBar title={tile.Title} />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
