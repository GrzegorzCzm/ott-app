import { signIn } from "../../utils/requestHandler";
import httpStatuses from "../../utils/httpStatuses";
export const actionIds = {
  SIGN_IN: "SIGN_IN",
  SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
  SIGN_IN_FAILED: "SIGN_IN_FAILED",
  RESET_DATA: "RESET_DATA",
};

export const signInAction = (data: any) => (dispatch: any) => {
  dispatch({
    type: actionIds.SIGN_IN,
  });
  signIn(data)
    .then((response) => {
      if (response.status !== httpStatuses.OK_STATUS) {
        dispatch(signInFailedAction(response.data));
      } else if (response.data?.ResultType === "Error") {
        dispatch(signInFailedAction(response.data));
      } else {
        dispatch(signInSuccessAction(response.data));
      }
    })
    .catch((err) => {
      dispatch(signInFailedAction(err.data));
    });
};

export const signInSuccessAction = (data: any) => ({
  type: actionIds.SIGN_IN_SUCCESS,
});

export const signInFailedAction = (data: any) => ({
  type: actionIds.SIGN_IN_FAILED,
  payload: data,
});
