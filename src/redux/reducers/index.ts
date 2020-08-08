import { combineReducers } from "redux";
import alerts from "./alerts";
import auth from "./auth";
import media from "./media";

const rootReducer = combineReducers({ alerts, auth, media });

export default rootReducer;
