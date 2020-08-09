import MockAdapter from "axios-mock-adapter";
import httpStatuses from "../httpStatuses";

import RequestService from "../RequestService";

const mock = new MockAdapter(RequestService.axiosInstance);
const dummyUrl = "/dummyUrl";
const logoutPath = "/login";
const dummyData = { dummy: 1 };

describe("RequestService", () => {
  const { replace } = window.location;

  beforeEach(() => {
    window.location.replace = jest.fn();
  });

  afterEach(() => {
    mock.reset();
    // @ts-ignores
    window.location = replace;
  });

  it("should redirect to logout page when unauthorized", (done) => {
    mock.onPost(dummyUrl).reply(httpStatuses.UNAUTHORIZED);
    RequestService.post(dummyUrl, {}).catch(() => {
      expect(window.location.replace).toHaveBeenCalledWith(logoutPath);
      done();
    });
  });

  it("should reject error when error returned (NOT unauthorized)", () => {
    mock.onPost(dummyUrl).reply(httpStatuses.BAD_REQUEST);

    expect(RequestService.post(dummyUrl, {})).rejects.toThrow(
      "Request failed with status code 400"
    );
  });

  it("should send get", async () => {
    mock.onGet(dummyUrl).reply(httpStatuses.OK_STATUS);
    const response = await RequestService.get(dummyUrl, {});
    expect(response.status).toEqual(httpStatuses.OK_STATUS);
  });

  it("should send post", async () => {
    mock.onPost(dummyUrl).reply(httpStatuses.OK_STATUS, dummyData);
    const response = await RequestService.post(dummyUrl, {});
    expect(response.status).toEqual(httpStatuses.OK_STATUS);
    expect(response.data).toEqual(dummyData);
  });
});
