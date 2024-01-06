import axios from "axios";
import { API } from "@env";
import env from "../../constansts/env_variables";
import header from "../header";

const addLikePossibleMatch = async (possibleMatchId) => {
  const url = `${env.API}/possibleMatches/like/${possibleMatchId}`;
  const headers = await header();

  try {
    console.log(possibleMatchId);
    const response = await axios.post(url, {}, {
      headers: headers,
    });
    
    return response.data;
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

export default addLikePossibleMatch;
