import axios from "axios";
import header from "../header";
import { CHAT_API } from "@env";
import env from "../../constansts/env_variables";

const accessChats = async (username) => {
  const url = `${env.CHAT_API}/chats`;
  const headers = await header();
  console.log(username);
  // Ensure headers are ready before making the request
  if (headers) {
    try {
      const response = await axios.post(
        url,
        {
          username: username,
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

export default accessChats;
