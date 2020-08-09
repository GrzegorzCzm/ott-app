import { combineReducers } from "redux";
import alerts, { Alerts } from "./alerts";
import auth, { Auth } from "./auth";
import media, { Media } from "./media";
import testMode, { TestMode } from "./testMode";

export interface CombinedStore {
  alerts: Alerts;
  auth: Auth;
  media: Media;
  testMode: TestMode;
}

const rootReducer = combineReducers({ alerts, auth, media, testMode });

export default rootReducer;
