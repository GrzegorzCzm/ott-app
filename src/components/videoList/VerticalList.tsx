import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

const DARK_GRAY = "#303030";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: DARK_GRAY,
    },
    gridList: {
      height: "40vh",
    },
  })
);

export default function VerticalList({ tileData, cols, cellHeight }: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={cellHeight}
        className={classes.gridList}
        cols={cols}
      >
        {tileData.map((tile: any) => (
          <GridListTile key={tile.title}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar title={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
