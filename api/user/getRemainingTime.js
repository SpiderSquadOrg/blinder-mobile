import axios from "axios";
import { API } from "@env";
import env from "../../constansts/env_variables";
import header from "../header";

const getRemainingTime = async (chatId) => {
  const url = `${env.API}/users/chats/${chatId}`;
  const headers = await header();

  try {
    const response = await axios.get(url, {
      headers: headers,
    });
    
    const time = response.data; // e.g., "167:06"
    const [hours, minutes] = time.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes;

    const days = Math.floor(totalMinutes / 1440);
    const hoursRemaining = Math.floor((totalMinutes % 1440) / 60);
    const minutesRemaining = totalMinutes % 60;

    return {
      days: days,
      hours: hoursRemaining,
      minutes: minutesRemaining,
    };
  } catch (error) {
    console.error("Error:", error.message);
    if (error.response) {
      console.error("Response Data:", error.response.data);
      console.error("Response Status:", error.response.status);
      console.error("Response Headers:", error.response.headers);
    }
    throw error;
  }
};

export default getRemainingTime;
