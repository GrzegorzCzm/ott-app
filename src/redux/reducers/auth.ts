import { actionIds } from "../actions/auth";

const initialState: any = {
  loading: false,
  userAuthenticated: false,
  authToken: undefined,
};

const authReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case actionIds.SIGN_IN:
      return {
        ...state,
        loading: true,
      };
    case actionIds.SIGN_IN_SUCCESS:
      return {
        loading: false,
        authToken: action.payload.AuthorizationToken.Token,
        userAuthenticated: true,
      };
    case actionIds.SIGN_IN_FAILED:
    case actionIds.RESET_DATA:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default authReducer;
