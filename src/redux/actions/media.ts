import { fetchMediaList, getMediaInfo } from "../../utils/requestHandler";
import httpStatuses from "../../utils/httpStatuses";
import { actionIds as authActionIds } from "./auth";
export const actionIds = {
  FETCH_MEDIA_LIST: "FETCH_MEDIA_LIST",
  FETCH_MEDIA_LIST_SUCCESS: "FETCH_MEDIA_LIST_SUCCESS",
  FETCH_MEDIA_LIST_FAILED: "FETCH_MEDIA_LIST_FAILED",
  GET_MEDIA_INFO: "GET_MEDIA_INFO",
  GET_MEDIA_INFO_SUCCESS: "GET_MEDIA_INFO_SUCCESS",
  GET_MEDIA_INFO_FAILED: "GET_MEDIA_INFO_FAILED",
};

export const fetchMediaAction = (data: any, isTestMode: boolean) => (
  dispatch: any
) => {
  dispatch({
    type: actionIds.FETCH_MEDIA_LIST,
  });
  fetchMediaList(data, isTestMode)
    .then((response: any) => {
      if (response.status !== httpStatuses.OK_STATUS) {
        dispatch(fetchMediaFailedAction(response.data));
      } else if (response.data?.ResultType === "Error") {
        dispatch(fetchMediaFailedAction(response.data));
      } else {
        dispatch(fetchMediaSuccessAction(response.data));
      }
    })
    .catch((err) => {
      dispatch(fetchMediaFailedAction(err.data));
      if (err.response?.status === httpStatuses.UNAUTHORIZED) {
        dispatch({ type: authActionIds.RESET_DATA });
      }
    });
};

const fetchMediaSuccessAction = (data: any) => ({
  type: actionIds.FETCH_MEDIA_LIST_SUCCESS,
  payload: data,
});

const fetchMediaFailedAction = (data: any) => ({
  type: actionIds.FETCH_MEDIA_LIST_FAILED,
  payload: data,
});

export const getMediaInfoAction = (data: any, isTestMode: boolean) => (
  dispatch: any
) => {
  dispatch({
    type: actionIds.GET_MEDIA_INFO,
  });
  getMediaInfo(data, isTestMode)
    .then((response: any) => {
      if (response.status !== httpStatuses.OK_STATUS) {
        dispatch(getMediaInfoFailedAction(response.data));
      } else if (response.data?.ResultType === "Error") {
        dispatch(getMediaInfoFailedAction(response.data));
      } else {
        dispatch(getMediaInfoSuccessAction(response.data));
      }
    })
    .catch((err) => {
      dispatch(getMediaInfoFailedAction(err.data));
      if (err.response?.status === httpStatuses.UNAUTHORIZED) {
        dispatch({ type: authActionIds.RESET_DATA });
      }
    });
};

const getMediaInfoSuccessAction = (data: any) => ({
  type: actionIds.GET_MEDIA_INFO_SUCCESS,
  payload: data,
});

const getMediaInfoFailedAction = (data: any) => ({
  type: actionIds.GET_MEDIA_INFO_FAILED,
  payload: data,
});
