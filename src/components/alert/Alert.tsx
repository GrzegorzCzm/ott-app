import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { closeAlertAction } from "../../redux/actions/alert";
import { CombinedStore } from "../../redux/reducers";

const Alert = () => {
  const dispatch = useDispatch();
  const { isAlert, alertText } = useSelector(
    (state: CombinedStore) => state.alerts
  );

  const closeAlert = () => {
    dispatch(closeAlertAction());
  };

  return (
    <Snackbar
      autoHideDuration={15000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={isAlert}
      onClose={closeAlert}
      message={alertText}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={closeAlert}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
};

export default Alert;
