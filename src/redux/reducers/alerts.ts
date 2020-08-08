import { actionIds } from "../actions/auth";
import { CLOSE_ALERT } from "../actions/alert";

const initialState = {
  isAlert: false,
  alertText: "",
};

const alertReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case actionIds.SIGN_IN_FAILED:
      return {
        isAlert: true,
        alertText: action.payload?.Message || "Unexpected error...",
      };
    case CLOSE_ALERT:
      return initialState;
    default:
      return state;
  }
};

export default alertReducer;
