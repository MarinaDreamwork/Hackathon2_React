import httpService from "./http.service";

const technologyEndPoint = "technology/";

const technologyService = {
  get: async () => {
    const { data } = await httpService.get(technologyEndPoint);
    return data;
  }
};

export default technologyService;