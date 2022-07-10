import httpService from './http.service';
import { localStorageService } from './localStorage.service';

const participantEndPoint = 'participant/';

const participantService = {
  get: async () => {
    const { data } = await httpService.get(participantEndPoint);
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.put(
      participantEndPoint + payload.id,
      payload
    );
    return data;
  },
  getCurrentParticipant: async () => {
    const { data } = await httpService.get(
      participantEndPoint + localStorageService.getParticipantId()
    );
    return data;
  },
  updateCurrentParticipant: async (payload) => {
    const { data } = await httpService.patch(
      participantEndPoint + payload.id,
      payload
    );
    return data;
  }
};

export default participantService;
