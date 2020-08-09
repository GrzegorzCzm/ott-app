import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { makeStyles } from "@material-ui/core/styles";
import { signInAction } from "../../redux/actions/auth";
import { setTestModeAction } from "../../redux/actions/testMode";
import { CombinedStore } from "../../redux/reducers";

const DARK_GRAY = "#303030";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  splash: {
    height: "100vh",
    width: "100%",
  },
  rightSide: {
    backgroundColor: DARK_GRAY,
  },
  image: {
    backgroundImage: "url(/camera.png)",
    backgroundRepeat: "no-repeat",
    backgroundColor: DARK_GRAY,
    backgroundSize: "auto",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: theme.spacing(4),
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: "100%",
    margin: theme.spacing(4, 4),
    padding: theme.spacing(4, 4),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading, userAuthenticated } = useSelector(
    (state: CombinedStore) => state.auth
  );
  const { isTestMode } = useSelector((state: CombinedStore) => state.testMode);

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const onLogin = () => {
    dispatch(
      signInAction({ Username: userName, Password: password }, isTestMode)
    );
  };

  const updateUserName = (event: any) => {
    setUserName(event.target.value);
  };

  const updatePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const updateTestMode = (event: any) => {
    dispatch(setTestModeAction(event.target.checked));
  };
  if (userAuthenticated) return <Redirect to={"/"} />;

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        className={classes.rightSide}
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <div className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="username"
              value={userName}
              onChange={updateUserName}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={updatePassword}
            />
            <Button
              fullWidth
              variant="contained"
              className={classes.submit}
              onClick={onLogin}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Sign In"}
            </Button>
            <FormControlLabel
              control={
                <Switch
                  checked={isTestMode}
                  onChange={updateTestMode}
                  color="primary"
                  name="Test mode"
                />
              }
              label="Test mode"
            />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
