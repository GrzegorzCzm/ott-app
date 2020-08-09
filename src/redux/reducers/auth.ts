import { actionIds } from "../actions/auth";

export interface Auth {
  loading: boolean;
  userAuthenticated: boolean;
}

const initialState: Auth = {
  loading: false,
  userAuthenticated: false,
};

const authReducer = (state: Auth = initialState, action: any) => {
  switch (action.type) {
    case actionIds.SIGN_IN:
      return {
        ...state,
        loading: true,
      };
    case actionIds.SIGN_IN_SUCCESS:
      return {
        loading: false,
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
