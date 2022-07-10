import axios from "axios";
import configuration from "../../src/app/config.json";
import authService from "./auth.service";
import { localStorageService } from "./localStorage.service";

const http = axios.create({
  baseURL: configuration.apiEndPoint
});

http.interceptors.request.use(
  async function (config) {
    if(configuration.isFirebase) {
      const containSlash = /\/$/gi.test(config.url);
      config.url = (containSlash ? (config.url.slice(0, -1) + ".json") : config.url + ".json");
      const expiresDate = localStorageService.getTokenExpiresDate();
      const refreshToken = localStorageService.getRefreshToken();
      if (refreshToken && expiresDate < Date.now()) {
        const data = await authService.refresh();
        localStorageService.setAuthTokens({
          refreshToken: data.refresh_token,
          idToken: data.id_token,
          localId: data.user_id,
          expiresIn: data.expires_in
        });
      }
     const accessToken = localStorageService.getAccessToken();
      if (accessToken) {
        config.params = {
          ...config.params,
          auth: accessToken
        };
      }
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (res) => {
    if(configuration.isFirebase) {
      res.data = { dataContent: transformData(res.data) };
    };
    return res;
  }
);

function transformData(data) {
  return data && !data.id
    ? Object.keys(data).map(key=> ({
      ...data[key]
    })) : data;
};

const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  patch: http.patch,
  delete: http.delete
};

export default httpService;