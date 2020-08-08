import { actionIds } from "../actions/media";

const initialState: any = {
  loadingMediaList: false,
  entities: [],
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
        loadingMediaList: false,
        entities: action.payload.entities,
      };
    case actionIds.FETCH_MEDIA_LIST_FAILED:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default authReducer;
