import axios from "axios";

export const getPostOffices = async (pincode) => {
  const options = {
    method: "POST",
    url: "https://pincode.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "36f296804dmshdc3f0e9714e9cbep16475bjsn06764d79027d",
      "X-RapidAPI-Host": "pincode.p.rapidapi.com",
    },
    data: {
      searchBy: "pincode",
      value: pincode,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

