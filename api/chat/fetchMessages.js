import axios from "axios";
import header from "../header";
import { CHAT_API } from "@env";
import env from "../../constansts/env_variables";

const fetchMessages = async (chatId) => {
  const url = `${env.CHAT_API}/messages/${chatId}`;
  const headers = await header();

  if (headers) {
    try {
      const response = await axios.get(url, {
        headers: headers,
      });
      return response.data;
    } catch (error) {
      console.error("Error accessing chats:", error.message);
      throw error;
    }
  }
};

export default fetchMessages;
