import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";

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
      flexWrap: "nowrap",
      transform: "translateZ(0)",
    },
    title: {},
    titleBar: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
  })
);

export default function HorizontalList({ tileData, cols, cellHeight }: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList
        className={classes.gridList}
        cols={cols}
        cellHeight={cellHeight}
      >
        {tileData.map((tile: any) => (
          <GridListTile key={tile.title}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
