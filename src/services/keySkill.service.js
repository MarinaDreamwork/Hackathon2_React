import httpService from "./http.service";

const keySkillEndPoint = "keySkill/";

const keySkillService = {
  get: async () => {
    const { data } = await httpService.get(keySkillEndPoint);
    return data;
  }
};

export default keySkillService;