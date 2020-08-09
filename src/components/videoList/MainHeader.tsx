import React from "react";
import Typography from "@material-ui/core/Typography";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const MID_GRAY = "#999999";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      display: "flex",
      alignSelf: "flex-start",
      backgroundColor: MID_GRAY,
      margin: theme.spacing(2),
      borderRadius: theme.spacing(2),
      padding: theme.spacing(2),
    },
    img: {
      width: theme.spacing(4),
      marginRight: theme.spacing(2),
    },
  })
);

interface MainHeaderParams {
  text: string;
}
const MainHeader = ({ text }: MainHeaderParams) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <img src="/camera192.png" alt={text} className={classes.img} />
      <Typography variant="h4">{text}</Typography>
    </div>
  );
};

export default MainHeader;
