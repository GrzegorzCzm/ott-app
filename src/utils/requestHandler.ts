import RequestService from "./RequestService";

export const signIn = (data: object) =>
  RequestService.post("/Authorization/SignIn", data);

export const fetchMediaList = (data: object) =>
  RequestService.post("/Media/GetMediaList", data);

export const getMediaInfo = (data: object) =>
  RequestService.get("/Media/GetMediaPlayInfo", data);
