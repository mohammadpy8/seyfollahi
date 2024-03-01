import axios from "axios";

const listNames = ["nature", "space", "animals", "city", "food"];

const RandomName = (listName) => {
  return listName[Math.floor(Math.random() * listName.length)];
};

const BASE_URL = "https://api.api-ninjas.com/v1/randomimage?";
const HEADERS = {
  "X-Api-Key": "ut+NbmA/EKK968op1AnF4g==gbttNolq2hDA7Wbj",
};

const api = axios.create({
  baseURL: BASE_URL,
  headers: HEADERS,
  timeout: 2500,
});

const httpRequest = {
  GET: api.get,
  POST: api.post,
  PUT: api.put,
  PATCH: api.patch,
  DELETE: api.delete,
};

const fetchData = async () => {
  try {
    const { data } = await httpRequest.GET(`category=${RandomName(listNames)}`);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export { fetchData, httpRequest };
