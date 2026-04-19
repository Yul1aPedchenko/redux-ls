import axios from "axios";

const BASE_URL = "https://connections-api.goit.global";

export const contactsApi = axios.create({
  baseURL: BASE_URL,
});
