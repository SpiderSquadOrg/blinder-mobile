import axios from "axios";
import { API } from "@env";
import env from "../../constansts/env_variables";

const addImage = async ({ publicId, uri }) => {
  const url = `${env.API}/images/upload`;

  let filename = uri.split("/").pop();
  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;

  let formData = new FormData();
  formData.append("image",  { uri, name: filename, type });
  formData.append("publicId", publicId);

  try {
    console.log("formData", formData);
    const response = await axios.post(
      url,
      formData, // Pass the FormData instance
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "*/*",
        },
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

export default addImage;
