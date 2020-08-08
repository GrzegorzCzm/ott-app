import { fetchMediaList } from "../../utils/requestHandler";
import httpStatuses from "../../utils/httpStatuses";
import { actionIds as authActionIds } from "./auth";
export const actionIds = {
  FETCH_MEDIA_LIST: "FETCH_MEDIA_LIST",
  FETCH_MEDIA_LIST_SUCCESS: "FETCH_MEDIA_LIST_SUCCESS",
  FETCH_MEDIA_LIST_FAILED: "FETCH_MEDIA_LIST_FAILED",
};

export const fetchMediaAction = (data: any) => (dispatch: any) => {
  dispatch({
    type: actionIds.FETCH_MEDIA_LIST,
  });
  fetchMediaList(data)
    .then((response) => {
      if (response.status !== httpStatuses.OK_STATUS) {
        dispatch(fetchMediaFailedAction(response.data));
      } else if (response.data?.ResultType === "Error") {
        dispatch(fetchMediaFailedAction(response.data));
      } else {
        dispatch(fetchMediaFailedAction(response.data));
      }
    })
    .catch((err) => {
      dispatch(fetchMediaFailedAction(err.data));
      if (err.response?.status === httpStatuses.UNAUTHORIZED) {
        dispatch({ type: authActionIds.RESET_DATA });
      }
    });
};

export const fetchMediaSuccessAction = (data: any) => ({
  type: actionIds.FETCH_MEDIA_LIST_SUCCESS,
});

export const fetchMediaFailedAction = (data: any) => ({
  type: actionIds.FETCH_MEDIA_LIST_FAILED,
  payload: data,
});
