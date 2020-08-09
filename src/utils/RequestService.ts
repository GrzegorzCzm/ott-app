import axios, { AxiosInstance } from "axios";
import httpStatuses from "./httpStatuses";

const JSON_CONTENT_TYPE = "application/json";

class RequestService {
  constructor() {
    this.setAxiosInstance();
  }

  private setAxiosInstance() {
    this.axiosInstance = axios.create({
      headers: {
        "Content-Type": JSON_CONTENT_TYPE,
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      baseURL: "https://thebetter.azurewebsites.net/",
    });

    this.axiosInstance.interceptors.response.use(
      (response: any) => response,
      (error: any) => {
        if (error.response?.status === httpStatuses.UNAUTHORIZED) {
          window.location.replace("/login");
        }
        return Promise.reject(error);
      }
    );
  }

  recreateAxiosService(): void {
    this.setAxiosInstance();
  }

  // @ts-ignore
  axiosInstance: AxiosInstance;

  get(url: string, params: object) {
    return this.axiosInstance.get(url, { params });
  }

  post(url: string, data: any) {
    return this.axiosInstance.post(url, data);
  }
}

export default new RequestService();
