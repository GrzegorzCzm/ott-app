import { signIn } from "../../utils/requestHandler";
import httpStatuses from "../../utils/httpStatuses";
import RequestService from "../../utils/RequestService";
export const actionIds = {
  SIGN_IN: "SIGN_IN",
  SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
  SIGN_IN_FAILED: "SIGN_IN_FAILED",
  RESET_DATA: "RESET_DATA",
};

interface Data {
  Username?: string;
  Password?: string;
}

export const signInAction = (data: Data, isTestMode: boolean) => (
  dispatch: any
) => {
  dispatch({
    type: actionIds.SIGN_IN,
  });
  signIn(data, isTestMode)
    .then((response: any) => {
      if (response.status !== httpStatuses.OK_STATUS) {
        localStorage.removeItem("token");
        dispatch(signInFailedAction(response.data));
      } else {
        if (response.data?.ResultType === "Error") {
          localStorage.removeItem("token");
          dispatch(signInFailedAction(response.data));
        } else {
          localStorage.setItem(
            "token",
            response.data.Result.AuthorizationToken.Token
          );
          RequestService.recreateAxiosService();
          dispatch(signInSuccessAction(response.data));
        }
      }
    })
    .catch((err) => {
      localStorage.removeItem("token");
      dispatch(signInFailedAction(err.data));
    });
};

const signInSuccessAction = (data: any) => ({
  type: actionIds.SIGN_IN_SUCCESS,
  payload: data,
});

const signInFailedAction = (data: any) => ({
  type: actionIds.SIGN_IN_FAILED,
  payload: data,
});

export const signOutAction = () => {
  localStorage.removeItem("token");
  return {
    type: actionIds.RESET_DATA,
  };
};
