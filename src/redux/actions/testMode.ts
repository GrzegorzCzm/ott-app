export const SET_TEST_MODE = "SET_TEST_MODE";

export const setTestModeAction = (isTestMode: boolean) => ({
  type: SET_TEST_MODE,
  payload: isTestMode,
});
