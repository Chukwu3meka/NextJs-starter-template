import axios from "axios";

const service = axios.create({ withCredentials: true, baseURL: process.env.API_URL }),
  accountsServiceUrl = "/accounts";

export { accountsServiceUrl, service as default };
