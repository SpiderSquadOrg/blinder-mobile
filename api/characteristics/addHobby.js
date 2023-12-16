import axios from "axios";
import { API } from "@env";
import env from "../../constansts/env_variables";
import header from "../header";

const addHobby = async ({ name }) => {
  const url = `${env.API}/characteristics/hobby/${name}`;
  const headers = await header();

  try {
    const response = await axios.patch(
      url,
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

export default addHobby;
