import { fetchMediaList, getMediaInfo } from "../../utils/requestHandler";
import httpStatuses from "../../utils/httpStatuses";
import { actionIds as authActionIds } from "./auth";
import { SHOW_ALERT } from "./alert";
export const actionIds = {
  FETCH_MEDIA_LIST: "FETCH_MEDIA_LIST",
  FETCH_MEDIA_LIST_SUCCESS: "FETCH_MEDIA_LIST_SUCCESS",
  FETCH_MEDIA_LIST_FAILED: "FETCH_MEDIA_LIST_FAILED",
  GET_MEDIA_INFO: "GET_MEDIA_INFO",
  GET_MEDIA_INFO_SUCCESS: "GET_MEDIA_INFO_SUCCESS",
  GET_MEDIA_INFO_FAILED: "GET_MEDIA_INFO_FAILED",
  RESET_DATA: "RESET_DATA",
};

const MEDIA_LIST_ERROR_TEXT = "Some of media lists could not be fetched. ";
const entitiesMediaData = {
  IncludeCategories: false,
  IncludeImages: true,
  IncludeMedia: false,
  PageNumber: 1,
  PageSize: 15,
};

export const fetchMediaAction = (mediaListIds: any, isTestMode: boolean) => (
  dispatch: any
) => {
  dispatch({
    type: actionIds.FETCH_MEDIA_LIST,
  });
  const promiseList = mediaListIds.map((mediaListId: number) =>
    fetchMediaList(
      { ...entitiesMediaData, MediaListId: mediaListId },
      isTestMode
    )
  );
  Promise.all(promiseList)
    .then((responsesList: any) => {
      const successData: any[] = [];
      const errorData: any[] = [];
      responsesList.forEach((response: any) => {
        if (response.status !== httpStatuses.OK_STATUS) {
          errorData.push(response.data);
        } else if (response.data?.ResultType === "Error") {
          errorData.push(response.data);
        } else {
          successData.push(response.data.Entities);
        }
      });

      if (errorData.length && !successData.length)
        dispatch(fetchMediaFailedAction());
      if (successData.length) dispatch(fetchMediaSuccessAction(successData));
      if (errorData.length)
        dispatch({
          type: SHOW_ALERT,
          payload: MEDIA_LIST_ERROR_TEXT,
        });
    })
    .catch((err) => {
      dispatch(fetchMediaFailedAction());
      if (err.response?.status === httpStatuses.UNAUTHORIZED) {
        dispatch({ type: authActionIds.RESET_DATA });
      } else {
        dispatch({
          type: SHOW_ALERT,
          payload: MEDIA_LIST_ERROR_TEXT,
        });
      }
    });
};

const fetchMediaSuccessAction = (data: any) => ({
  type: actionIds.FETCH_MEDIA_LIST_SUCCESS,
  payload: data,
});

const fetchMediaFailedAction = () => ({
  type: actionIds.FETCH_MEDIA_LIST_FAILED,
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
        dispatch(getMediaInfoFailedAction());
      } else if (response.data?.ResultType === "Error") {
        dispatch(getMediaInfoFailedAction());
      } else {
        dispatch(getMediaInfoSuccessAction(response.data));
      }
    })
    .catch((err) => {
      dispatch(getMediaInfoFailedAction());
      if (err.response?.status === httpStatuses.UNAUTHORIZED) {
        dispatch({ type: authActionIds.RESET_DATA });
      }
    });
};

const getMediaInfoSuccessAction = (data: any) => ({
  type: actionIds.GET_MEDIA_INFO_SUCCESS,
  payload: data,
});

const getMediaInfoFailedAction = () => ({
  type: actionIds.GET_MEDIA_INFO_FAILED,
});
