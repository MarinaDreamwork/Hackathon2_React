import httpService from "./http.service";

const paricipantEndPoint = "participant/";

const participantService = {
  get: async () => {
    const { data } = await httpService.get(paricipantEndPoint);
    return data;
  },
  create: async (payload) => {
    const  { data }  = await httpService.put(paricipantEndPoint + payload.id, payload);
    return data;
  }
};

export default participantService;