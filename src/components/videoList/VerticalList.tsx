import React from "react";
import { Link } from "react-router-dom";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Header from "../widgets/Header";

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
              <img
                src={
                  tile.Images.find(
                    (image: any) => image.ImageTypeCode === "FRAME"
                  ).Url
                }
                alt={tile.Title}
                height={`${cellHeight}px`}
              />
              <GridListTileBar title={tile.Title} />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
