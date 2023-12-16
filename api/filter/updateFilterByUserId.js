import axios from "axios";
import { API } from "@env";
import env from "../../constansts/env_variables";
import header from "../header";

const updateFilterByUserId = async (userId, body) => {
  //{ genders, locationType, locationId, ageLowerBound, ageUpperBound } = body;
  const url = `${env.API}/filter/${userId}`;
  const headers = await header();

  try {
    const response = await axios.put(
      url,
      {
        ...body,
      },
      {
        headers: headers,
      }
    );

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

export default updateFilterByUserId;
