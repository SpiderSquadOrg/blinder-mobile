import { storeData, getData, removeData, clearAllData } from "../utils/storage";
import { CHAT_AUTHORIZATION } from "@env";

const header = async () => {
  const token = await getData("userInfo");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    ChatAuthorization: CHAT_AUTHORIZATION,
    "If-Modified-Since": "",
    "If-None-Match": "",
  };

  return headers;
};

export default header;
