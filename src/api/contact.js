// import { BASE_PATH } from "../utils/constants"
const BASE_PATH = process.env.BASE_PATH;

export async function postMessageContact(message) {
  try {
    const url = `${BASE_PATH}/mensajes`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
