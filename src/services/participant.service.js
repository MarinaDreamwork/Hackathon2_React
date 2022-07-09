import httpService from "./http.service";

const paricipantEndPoint = "participant/";

const participantService = {
  get: async () => {
    const { data } = await httpService.get(paricipantEndPoint);
    return data;
  }
};

export default participantService;