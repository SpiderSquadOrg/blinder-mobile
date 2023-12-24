import axios from "axios";
import { API } from "@env";
import env from "../../constansts/env_variables";

const register = async (
    username, 
    password,
    email,
    name,
    surname,
    nickname,
    phoneNumber,
    genderId,
    birthDate,
    images,
    countryIso2,
    stateIso2
    ) => {
  const url = `${env.API}/auth/register`;

  try {
    const response = await axios.post(url, {
      username: username,
      password: password,
      email: email,
      name: name,
      surname: surname,
      nickname: nickname,
      phoneNumber: phoneNumber,
      genderId: genderId,
      birthDate: birthDate,
      images: [images],
      location: {
        countryIso2: countryIso2,
        stateIso2: stateIso2,
      }
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
