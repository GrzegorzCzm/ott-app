import { actionIds } from "../actions/media";

export interface Media {
  loadingMediaList: boolean;
  entitiesList: Object[];
  loadingMediaInfo: boolean;
  mediaInfo: {
    Title?: string;
    ContentUrl?: string;
    Description?: string;
  };
}

const initialState: Media = {
  loadingMediaList: false,
  entitiesList: [],
  loadingMediaInfo: false,
  mediaInfo: {},
};

const authReducer = (state: Media = initialState, action: any) => {
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
        entitiesList: action.payload,
      };
    case actionIds.FETCH_MEDIA_LIST_FAILED:
    case actionIds.GET_MEDIA_INFO_FAILED:
    case actionIds.RESET_DATA:
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
