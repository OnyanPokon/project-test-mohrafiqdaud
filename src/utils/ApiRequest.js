import axios from "axios";
import CONFIG from "./config";

const apirequest = async (
  endpoint,
  method = "GET",
  body = null,
  params = {},
  Content = "application/json",
) => {
  // Gunakan endpoint relatif
  const url = `${CONFIG.BASE_URL}/${endpoint}`;

  try {
    const response = await axios({
      url,
      method,
      headers: {
        "Content-Type": Content,
      },
      data: body,
      params,
    });

    return response;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
};

export default apirequest;
