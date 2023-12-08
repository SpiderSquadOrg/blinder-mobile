import axios from "axios";
import header from "../header";
//import { CHAT_API } from "@env";
import env from "../../constansts/env_variables";

const sendMessage = async (chatId, content) => {
  const url = `${env.CHAT_API}/messages`;
  const headers = await header();

  // Ensure headers are ready before making the request
  if (headers) {
    try {
      const response = await axios.post(
        url,
        {
          chatId: chatId,
          content: content,
        },
        {
          headers: headers,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error accessing chats:", error.message);
      throw error;
    }
  }
};

export default sendMessage;
