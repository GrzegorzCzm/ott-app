import RequestService from "./RequestService";
import signInResponse from "../__testData/signInResponse";
import mediaList from "../__testData/mediaList";
import mediaInfo from "../__testData/mediaInfo";

export const signIn = (data: object, isTestMode: boolean) =>
  isTestMode
    ? new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(signInResponse);
        }, 500);
      })
    : RequestService.post("/Authorization/SignIn", data);

export const fetchMediaList = (data: object, isTestMode: boolean) =>
  isTestMode
    ? new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(mediaList);
        }, 500);
      })
    : RequestService.post("/Media/GetMediaList", data);

export const getMediaInfo = (data: object, isTestMode: boolean) =>
  isTestMode
    ? new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(mediaInfo);
        }, 1000);
      })
    : RequestService.get("/Media/GetMediaPlayInfo", data);
