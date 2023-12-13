import axios from "axios";
import { API } from "@env";
import env from "../../constansts/env_variables";

const register = async (
    username, 
    password,
    email,
    name,
    surname,
    phoneNumber,
    genderId,
    birthDate,
    images,
    countryId,
    stateId
    ) => {
  const url = `${env.API}/auth/register`;

  try {
    const response = await axios.post(url, {
      username: username,
      password: password,
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

export default register;
