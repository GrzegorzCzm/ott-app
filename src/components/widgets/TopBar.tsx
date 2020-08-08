import React from "react";
import { useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import { signOutAction } from "../../redux/actions/auth";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topBar: {
      display: "flex",
      alignSelf: "flex-start",
    },
  })
);

const TopBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const signOut = () => {
    console.log("SIGN OUT");
    dispatch(signOutAction());
  };

  return (
    <div className={classes.topBar}>
      <Button
        onClick={signOut}
        variant="contained"
        startIcon={<ExitToAppIcon />}
      >
        Sign out
      </Button>
    </div>
  );
};

export default TopBar;
