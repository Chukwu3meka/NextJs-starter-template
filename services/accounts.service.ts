import service, { accountsServiceUrl } from ".";

import { ThemePayload } from "interfaces/services/accounts.interface";

const accountsService = {
  getProfile: async () => {
    const response = await service.get(accountsServiceUrl + "/profile");
    return response.data;
  },

  setTheme: async (payload: ThemePayload) => {
    const response = await service.post(accountsServiceUrl + "/theme", payload);
    return response.data;
  },
};

export default accountsService;
