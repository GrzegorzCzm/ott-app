import { actionIds } from "../actions/media";

const initialState: any = {
  loadingMediaList: false,
  entitiesList: [],
  loadingMediaInfo: false,
  mediaInfo: {},
};

const authReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case actionIds.FETCH_MEDIA_LIST:
      return {
        ...state,
        loadingMediaList: true,
      };
    case actionIds.FETCH_MEDIA_LIST_SUCCESS:
      return {
        ...state,
        loadingMediaList: false,
        entitiesList: [...state.entitiesList, action.payload.Entities],
      };
    case actionIds.FETCH_MEDIA_LIST_FAILED:
    case actionIds.GET_MEDIA_INFO_FAILED:
      return {
        ...initialState,
      };

    case actionIds.GET_MEDIA_INFO:
      return {
        ...state,
        loadingMediaInfo: true,
      };
    case actionIds.GET_MEDIA_INFO_SUCCESS:
      return {
        ...state,
        loadingMediaInfo: false,
        mediaInfo: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
