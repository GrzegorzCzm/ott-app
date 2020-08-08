import { combineReducers } from "redux";
import alerts from "./alerts";
import auth from "./auth";
import media from "./media";
import testMode from "./testMode";

const rootReducer = combineReducers({ alerts, auth, media, testMode });

export default rootReducer;
