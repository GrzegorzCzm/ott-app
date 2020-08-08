import { SET_TEST_MODE } from "../actions/testMode";

const initialState = {
  isTestMode: false,
};

const testMode = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_TEST_MODE:
      return {
        isTestMode: action.payload,
      };
    default:
      return state;
  }
};

export default testMode;
