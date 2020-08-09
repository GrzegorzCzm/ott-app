import { actionIds } from "../actions/auth";
import { CLOSE_ALERT, SHOW_ALERT } from "../actions/alert";

export interface Alerts {
  isAlert: boolean;
  alertText: string;
}

const initialState: Alerts = {
  isAlert: false,
  alertText: "",
};

const alertReducer = (state: Alerts = initialState, action: any) => {
  switch (action.type) {
    case actionIds.SIGN_IN_FAILED:
      return {
        isAlert: true,
        alertText: action.payload?.Message || "Unexpected error...",
      };
    case SHOW_ALERT:
      return {
        isAlert: true,
        alertText: action.payload,
      };
    case CLOSE_ALERT:
      return initialState;
    default:
      return state;
  }
};

export default alertReducer;
