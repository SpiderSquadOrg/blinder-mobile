import axios from "axios";
import { API } from "@env";
import env from "../../constansts/env_variables";

const getGenders = async () => {
  const url = `${env.API}/genders`;

  try {
    const response = await axios.get(url);
    
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

export default getGenders;
