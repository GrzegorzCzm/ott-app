import React from "react";
import Typography from "@material-ui/core/Typography";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      display: "flex",
      alignSelf: "flex-start",
      width: "100%",
      padding: theme.spacing(2, 2),
    },
  })
);

interface ListHeaderParams {
  text?: string;
}

const ListHeader = ({ text }: ListHeaderParams) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Typography variant="h5">{text}</Typography>
    </div>
  );
};

export default ListHeader;
