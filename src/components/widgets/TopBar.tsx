import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import { signOutAction } from "../../redux/actions/auth";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topBar: {
      padding: theme.spacing(2, 2),
      display: "flex",
      alignSelf: "flex-start",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    logo: {
      display: "flex",
      alignSelf: "flex-start",
      flexWrap: "wrap",
      flexDirection: "row",
    },
  })
);

interface TopBarParams {
  isHomePage: boolean;
}

const TopBar = ({ isHomePage }: TopBarParams) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  let history = useHistory();

  const homeClicked = () => {
    history.goBack();
  };

  const signOut = () => {
    dispatch(signOutAction());
  };

  return (
    <div className={classes.topBar}>
      {isHomePage ? (
        <div className={classes.logo}>
          <img src="/logo.ico" alt="logo" />
        </div>
      ) : (
        <Button
          onClick={homeClicked}
          variant="outlined"
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      )}
      <Button
        onClick={signOut}
        variant="outlined"
        startIcon={<ExitToAppIcon />}
      >
        Sign out
      </Button>
    </div>
  );
};

export default TopBar;
