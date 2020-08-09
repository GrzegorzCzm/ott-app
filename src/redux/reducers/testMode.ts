import { SET_TEST_MODE } from "../actions/testMode";

export interface TestMode {
  isTestMode: boolean;
}

const initialState: TestMode = {
  isTestMode: false,
};

const testMode = (state: TestMode = initialState, action: any) => {
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
