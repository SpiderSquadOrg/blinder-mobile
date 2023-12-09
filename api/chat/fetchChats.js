import axios from "axios";
import { CHAT_API } from "@env";
import header from "../header";
import env from "../../constansts/env_variables";

const fetchChats = async () => {
  const url = `${env.CHAT_API}/chats`;
  const headers = await header();

  // Ensure headers are ready before making the request
  if (headers) {
    try {
      const response = await axios.get(url, {
        headers: headers,
      });

      return response.data;
    } catch (error) {
      console.error("Error fetching chats:", error.message);
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      }
      throw error;
    }
  }
};

export default fetchChats;
