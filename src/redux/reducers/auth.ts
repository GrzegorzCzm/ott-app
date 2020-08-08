import { actionIds } from "../actions/auth";

const initialState: any = {
  loading: false,
  userAuthenticated: false,
};

const authReducer = (state: any = initialState, action: any) => {
  console.log("REDUCER", action);
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
